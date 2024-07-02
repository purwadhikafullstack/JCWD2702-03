import { useGetFilterStockQuery } from '../api/useGetFilterStockQuery';

export const useGetFilterStock = (page: number) => {
  const { data, isLoading, refetch } = useGetFilterStockQuery(page);

  return {
    filterStock: data?.data,
    isLoading,
    refetch,
  };
};
