const BASE_URL = "https://demo.dataverse.org/api";

type SearchQueryParams = Record<"q", string>;

interface APIOptions {
  params?: SearchQueryParams;
  abortSignal?: AbortSignal;
}

function buildURL(
  base: `https://${string}`,
  url: string,
  queryParams?: SearchQueryParams
): URL {
  const fullURL = new URL(url, base);
  if (queryParams !== undefined) {
    const params = new URLSearchParams(queryParams);
    fullURL.search = params.toString();
  }

  return fullURL;
}

class APIError extends Error {
  status: number;
  name: string;
  constructor(response: Response) {
    super(response.statusText);
    this.name = "APIError";
    this.status = response.status;
  }
}

export async function get<TResponse>(
  url: string,
  options?: APIOptions
): Promise<TResponse> {
  const fullURL = buildURL(BASE_URL, url, options?.params);

  const response = await fetch(fullURL, { signal: options?.abortSignal });
  if (!response.ok) {
    throw new APIError(response);
  }

  return response.json();
}
