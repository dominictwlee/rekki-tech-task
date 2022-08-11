const BASE_URL = "https://demo.dataverse.org";

type SearchQueryParams = Record<"q", string>;

interface APIOptions {
  params?: SearchQueryParams;
}

export interface SearchItem {
  name: string;
  type: string;
  url: string;
  description: string;
  global_id: string;
  published_at: string;
  publisher: string;
  authors: string[];
  contacts: { name: string; affiliation: string }[];
  createdAt: string;
  updatedAt: string;
  fileCount: number;
  versionId: number;
  identifier_of_dataverse: string;
  name_of_dataverse: string;
  citation: string;
  storageIdentifier: string;
  subjects: string[];
}

export interface GetSearchResponse {
  status: string;
  message?: string;
  data: {
    q: string;
    total_count: number;
    start: number;
    items: SearchItem[];
    count_in_response: number;
  };
}

function buildURL(
  base: `https://${string}`,
  url: string,
  queryParams?: SearchQueryParams
): URL {
  const fullURL = new URL(`api${url}`, base);
  if (queryParams !== undefined) {
    const params = new URLSearchParams(queryParams);
    fullURL.search = params.toString();
  }

  return fullURL;
}

export class APIError extends Error {
  readonly status: number;
  readonly name: string;
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

  const response = await fetch(fullURL);
  if (!response.ok) {
    throw new APIError(response);
  }

  const blah = new APIError(response);

  return response.json();
}
