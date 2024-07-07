'use client';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const useAuthPasswordVerify = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({
      accesstoken,
      password,
      confirmPassword,
      // details
    }: {
      accesstoken: string;
      password: string;
      confirmPassword: string;
      // details?: string | undefined
    }) => {
      return await axiosInstance.post(
        `/users/verification`,
        {
          password,
          confirmPassword,
        },
        {
          headers: {
            accesstoken: accesstoken,
          },
        },
      );
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
