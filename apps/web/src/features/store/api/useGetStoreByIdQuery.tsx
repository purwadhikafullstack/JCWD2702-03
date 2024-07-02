'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetStoreByIdQuery = (storeID: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['storeById', storeID],
    queryFn: async () => {
      return await axios.get(`http://localhost:8000/store/${storeID}`);
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
