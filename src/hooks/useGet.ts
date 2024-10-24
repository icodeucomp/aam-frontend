import { useEffect, useState } from "react";

import { request } from "@/utils";

interface UseGetParamsProps {
  path: string;
  searchQuery?: string;
  sort?: string;
  order?: string;
  dateStart?: string;
  dateEnd?: string;
  page?: string;
  limit?: string;
}

export const useGet = <T>({ path, searchQuery, sort, order, dateStart, dateEnd, page = "1", limit = "9" }: UseGetParamsProps) => {
  const [response, setResponse] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await request({
        path,
        method: "GET",
        options: {
          params: {
            title: searchQuery,
            sort,
            order,
            dateStart,
            dateEnd,
            page,
            limit,
          },
        },
      })
        .then((response) => setResponse(response.data))
        .catch((error) => setError(error instanceof Error ? error.message : "There was an error where fetching"))
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [path, searchQuery, sort, order, dateStart, dateEnd, page, limit]);

  return { response, error, loading };
};
