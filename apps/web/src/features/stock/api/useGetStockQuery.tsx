'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetStockQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getStock'],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/stock/`);
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
