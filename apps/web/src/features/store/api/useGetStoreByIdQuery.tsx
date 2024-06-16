'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetStoreByIdQuery = (storeId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['storeById', storeId],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/store/${storeId}`);
    },
  });
  return {
    data,
    isLoading,
  };
};
