'use client';
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfileQuery = (profileId: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ['userProfile', profileId],
    queryFn: async () => {
      return await axiosInstanceInterceptor.get(`/user/`);
    },
  });

  return {
    data,
    isLoading,
  };
};
