'use client';
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfileQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      return await axiosInstanceInterceptor.get(`/users`);
    },
  });

  return {
    data,
    isLoading,
  };
};
