import useSWR from "swr";
// for client-side requests in next.js
export const fetcher = (args: any) => fetch(args).then((res) => res.json());

export const useUser = (apiUrl: string) => {
  const { data, error } = useSWR(apiUrl, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
