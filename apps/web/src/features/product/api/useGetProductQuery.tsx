'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProductQuery = (productName: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getProduct', productName],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:8000/product?`, {
        params: {
          productName: productName[0],
        },
      });
      return res;
    },
  });
  return {
    data,
    isLoading,
  };
};
