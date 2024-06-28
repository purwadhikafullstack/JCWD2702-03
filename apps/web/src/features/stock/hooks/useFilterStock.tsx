import { useGetFilterStockQuery } from '../api/useGetFilterStockQuery';

export const useGetFilterStock = (page: number, asc: string, desc: string) => {
  const { data, isLoading, refetch } = useGetFilterStockQuery(page, asc, desc);

  return {
    filterStock: data?.data,
    isLoading,
    refetch,
  };
};
