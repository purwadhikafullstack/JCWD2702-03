'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetStoreQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getStore'],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/store/`);
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
