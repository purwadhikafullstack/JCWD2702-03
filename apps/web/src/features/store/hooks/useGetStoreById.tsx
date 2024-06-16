import { useGetStoreByIdQuery } from '../api/useGetStoreByIdQuery';

export const useGetStoreById = (id: string) => {
  const { data, isLoading } = useGetStoreByIdQuery(id);
  return {
    dataStoreById: data?.data?.data,
  };
};
