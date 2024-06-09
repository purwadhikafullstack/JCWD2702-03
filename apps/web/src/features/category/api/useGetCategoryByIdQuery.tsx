'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCategoryByIdQuery = (categoryId: string) => {
  const { data } = useQuery({
    queryKey: ['categoryById', categoryId],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/category/${categoryId}`);
    },
  });
  return {
    data,
  };
};
