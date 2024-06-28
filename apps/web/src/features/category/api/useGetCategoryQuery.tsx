'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCategoryQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getAllProduct'],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/category/`);
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
