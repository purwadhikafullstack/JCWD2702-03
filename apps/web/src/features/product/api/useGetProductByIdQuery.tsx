'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProductByIdQuery = (productID: string) => {
  const { data, refetch } = useQuery({
    queryKey: ['productById', productID],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/product/${productID}`);
    },
  });
  return {
    data,
    refetch,
  };
};
