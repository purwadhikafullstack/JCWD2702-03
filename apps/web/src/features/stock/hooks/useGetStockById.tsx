import { useGetStockByIdQuery } from '../api/useGetStockByIdQuery';

export const useGetStockById = (id: string) => {
  const { data, isLoading, refetch } = useGetStockByIdQuery(id);

  return {
    dataStockById: data?.data?.data,
    isLoading,
    refetch,
  };
};
