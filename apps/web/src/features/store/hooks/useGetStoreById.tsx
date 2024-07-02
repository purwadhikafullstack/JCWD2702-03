import { useGetStoreByIdQuery } from '../api/useGetStoreByIdQuery';

export const useGetStoreById = (id: string) => {
  const { data, isLoading, refetch } = useGetStoreByIdQuery(id);
  return {
    data,
    isLoading,
    refetch,
  };
};
