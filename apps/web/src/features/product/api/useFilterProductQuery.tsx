'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFilterProductQuery = (
  productName: string,
  category: any,
  page: any,
) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getProduct', productName, category, page],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:8000/product/filter?productName=${productName}&category=${category}&page=${page}`,
      );
      return res;
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
