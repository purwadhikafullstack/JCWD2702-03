import { useGetStockQuery } from '../api/useGetStockQuery';

export const useGetStock = () => {
  const { data, isLoading } = useGetStockQuery();

  return {
    dataStock: data?.data?.data,
    isLoading,
  };
};
