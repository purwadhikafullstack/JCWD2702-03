'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetStockByIdQuery = (stockId: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getStockById', stockId],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/stock/${stockId}`);
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
