'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProductQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getProduct'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:8000/product/');
      return res;
    },
  });
  return {
    data,
    isLoading,
  };
};
