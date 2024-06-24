'use client';

import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';
import { useMutation } from '@tanstack/react-query';

export const useCreateUserProfileMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async (fd: any) => {
      return await axiosInstanceInterceptor.post('/users/profile', fd);

      
    },

    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
