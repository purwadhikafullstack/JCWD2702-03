import { useGetRestoreStoreQuery } from '../../api/store/useGetRestoreStoreQuery';

export const useGetRestoreStore = () => {
  const { data, isLoading, refetch } = useGetRestoreStoreQuery();

  return {
    dataRestoreStore: data?.data,
    isLoading,
    refetch,
  };
};
