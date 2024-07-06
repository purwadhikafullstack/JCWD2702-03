'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetRestoreProductQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getRestoreProduct'],
    queryFn: async () => {
      return await axios.get('http://localhost:8000/restore/product/');
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
