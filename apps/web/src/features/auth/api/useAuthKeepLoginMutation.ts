'use client';

import { useMutation } from '@tanstack/react-query';
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';

export const useAuthKeepLoginMutation = ({ onSuccess, onError }: any) => {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {

      return await axiosInstanceInterceptor.post('/auth/login/keep-login');
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
  };
};
