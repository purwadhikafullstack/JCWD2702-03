'use client';
import { axiosInstanceInterceptor } from '@/utils/axiosInstanceInterceptor';
import { useMutation } from '@tanstack/react-query';

export const useSetMainAddressMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      return await axiosInstanceInterceptor.patch(`/users/address/main?id=${id}`);
    },

    onSuccess,
    onError,
  });
  return {
    mutate,
  };
};
