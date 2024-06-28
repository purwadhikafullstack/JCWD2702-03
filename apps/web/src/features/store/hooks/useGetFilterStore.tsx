import { useGetFilterStoreQuery } from "../api/useGetFilterStore";

export const useGetFilterStore = (page: number) => {
  const { data, isLoading, refetch } = useGetFilterStoreQuery(page);
  return {
    filterStore: data?.data,
    isLoading,
    refetch,
  };
};
