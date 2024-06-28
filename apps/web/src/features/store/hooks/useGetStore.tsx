import { useGetStoreQuery } from '../api/useGetStoreQuery';

export const useGetStore = () => {
  const { data, isLoading, refetch } = useGetStoreQuery();
  return {
    dataStore: data?.data,
    isLoading,
    refetch,
  };
};
