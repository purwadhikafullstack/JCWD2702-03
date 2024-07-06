'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetRestoreCategoryQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getRestoreCategory'],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/restore/category`);
    },
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
