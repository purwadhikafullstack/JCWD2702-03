'use client';
import { axiosInstance } from '@/utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const useCreateResendEmailMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      return await axiosInstance.post('/users/resend-email', { email });
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
