import { useState } from "react";
import * as api from "./api";

export enum FetchStatus {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
  Error = "error",
}

export default function useSearch() {
  const [status, setStatus] = useState(FetchStatus.Idle);
  const [error, setError] = useState<api.APIError | null>(null);
  const [data, setData] = useState<api.GetSearchResponse["data"] | undefined>(
    undefined
  );

  const getSearchResult = async (searchTerms: string) => {
    setStatus(FetchStatus.Loading);
    try {
      const response = await api.get<api.GetSearchResponse>("/search", {
        params: { q: `title:${searchTerms}` },
      });
      setData(response.data);
      setStatus(FetchStatus.Success);
      return response;
    } catch (error) {
      const err = error as api.APIError;
      setError(err);
      setStatus(FetchStatus.Error);
      return err;
    }
  };

  return {
    data,
    error,
    status,
    getSearchResult,
  };
}
