import { useGetStoreQuery } from '../api/useGetStoreQuery';

export const useGetStore = () => {
  const { data, isLoading } = useGetStoreQuery();
  return {
    dataStore: data?.data?.data,
    isLoading,
  };
};
