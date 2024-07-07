'use client';
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetAddressQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['address'],
    queryFn: async () => {
      return await axiosInstanceInterceptor.get('http://localhost:8000/users/address/');
    },
  });

  return{
    data,
    isLoading,
    refetch
  }
};
