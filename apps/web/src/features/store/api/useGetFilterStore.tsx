'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetFilterStoreQuery = (page: number) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getStore', page],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/store/filter?page=${page}`);
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
