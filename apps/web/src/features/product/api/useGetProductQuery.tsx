'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProductQuery = (productName: string, category: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getProduct', productName, category],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:8000/product?productName=${productName}&category=${category}`,
      );
      return res;
    },
  });
  return {
    data,
    isLoading,
  };
};
