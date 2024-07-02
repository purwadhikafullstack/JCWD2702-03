'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetFilterCategoryQuery = (page: number) => {
  const {
    data,
    isLoading,
    refetch: refetchCategory,
  } = useQuery({
    queryKey: ['getAllProduct', page],
    queryFn: async () => {
      return await axios.get(
        `http://localhost:8000/category/filter?page=${page}`,
      );
    },
  });
  return {
    data,
    isLoading,
    refetchCategory,
  };
};
