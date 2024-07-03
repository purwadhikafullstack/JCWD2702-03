import { useGetStockQuery } from '../api/useGetStockQuery';

export const useGetStock = () => {
  const { data, isLoading, refetch } = useGetStockQuery();

  return {
    dataStock: data?.data,
    isLoading,
    refetch,
  };
};
