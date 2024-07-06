'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetRestoreStoreQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getRestoreStore'],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/restore/store`);
    },
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
