import useSWR from "swr";

export const fetcher = (args: any) => fetch(args).then((res) => res.json());

export const useUser = (apiUrl: string) => {
  const { data, error } = useSWR(apiUrl, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
