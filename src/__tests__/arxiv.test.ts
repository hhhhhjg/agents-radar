import { describe, expect, it, vi } from "vitest";
import { ARXIV_MAX_ATTEMPTS, ARXIV_REQUEST_DELAY_MS, fetchArxivResponse } from "../arxiv.ts";

describe("ArXiv request retry", () => {
  it("uses a request interval longer than ArXiv's three-second minimum", () => {
    expect(ARXIV_REQUEST_DELAY_MS).toBeGreaterThan(3000);
  });

  it("retries HTTP 429 with exponential backoff", async () => {
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response("", { status: 429 }))
      .mockResolvedValueOnce(new Response("", { status: 429 }))
      .mockResolvedValueOnce(new Response("<feed />", { status: 200 }));
    const sleepImpl = vi.fn(async () => undefined);

    const response = await fetchArxivResponse("https://export.arxiv.org/api/query", "navigation", {
      fetchImpl,
      sleepImpl,
      retryBaseDelayMs: 1000,
    });

    expect(response?.status).toBe(200);
    expect(fetchImpl).toHaveBeenCalledTimes(3);
    expect(sleepImpl.mock.calls).toEqual([[1000], [2000]]);
  });

  it("honors Retry-After when it is longer than the local backoff", async () => {
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response("", { status: 429, headers: { "retry-after": "9" } }))
      .mockResolvedValueOnce(new Response("<feed />", { status: 200 }));
    const sleepImpl = vi.fn(async () => undefined);

    await fetchArxivResponse("https://export.arxiv.org/api/query", "navigation", {
      fetchImpl,
      sleepImpl,
      retryBaseDelayMs: 1000,
    });

    expect(sleepImpl).toHaveBeenCalledWith(9000);
  });

  it("caps an excessively long Retry-After value", async () => {
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response("", { status: 429, headers: { "retry-after": "3600" } }))
      .mockResolvedValueOnce(new Response("<feed />", { status: 200 }));
    const sleepImpl = vi.fn(async () => undefined);

    await fetchArxivResponse("https://export.arxiv.org/api/query", "navigation", {
      fetchImpl,
      sleepImpl,
      retryBaseDelayMs: 1000,
      maxRetryDelayMs: 60_000,
    });

    expect(sleepImpl).toHaveBeenCalledWith(60_000);
  });

  it("sets a timeout on every ArXiv request", async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue(new Response("<feed />", { status: 200 }));

    await fetchArxivResponse("https://export.arxiv.org/api/query", "navigation", {
      fetchImpl,
      requestTimeoutMs: 1234,
    });

    expect(fetchImpl.mock.calls[0]?.[1]?.signal).toBeInstanceOf(AbortSignal);
  });

  it("stops after the configured maximum attempts", async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue(new Response("", { status: 429 }));
    const sleepImpl = vi.fn(async () => undefined);

    const response = await fetchArxivResponse("https://export.arxiv.org/api/query", "navigation", {
      fetchImpl,
      sleepImpl,
      retryBaseDelayMs: 1,
    });

    expect(response).toBeNull();
    expect(fetchImpl).toHaveBeenCalledTimes(ARXIV_MAX_ATTEMPTS);
    expect(sleepImpl).toHaveBeenCalledTimes(ARXIV_MAX_ATTEMPTS - 1);
  });

  it("does not retry a non-transient client error", async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue(new Response("", { status: 400 }));
    const sleepImpl = vi.fn(async () => undefined);

    const response = await fetchArxivResponse("https://export.arxiv.org/api/query", "navigation", {
      fetchImpl,
      sleepImpl,
    });

    expect(response).toBeNull();
    expect(fetchImpl).toHaveBeenCalledOnce();
    expect(sleepImpl).not.toHaveBeenCalled();
  });
});
