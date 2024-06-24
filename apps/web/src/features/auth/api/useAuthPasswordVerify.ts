'use client';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const useAuthPasswordVerify = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({
      accesstoken,
      password,
      confirmPassword,
    }: {
      accesstoken: string;
      password: string;
      confirmPassword: string;
    }) => {
      return await axiosInstance.post(
        '/users/verification',
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
