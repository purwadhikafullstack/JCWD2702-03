'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetFilterStockQuery = (
  page: number,
  asc: string,
  desc: string,
) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getStock', page, asc, desc],
    queryFn: async () => {
      return await axios.get(
        `http://localhost:8000/stock/filter?asc=${asc}&desc=${desc}&page=${page}`,
      );
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
