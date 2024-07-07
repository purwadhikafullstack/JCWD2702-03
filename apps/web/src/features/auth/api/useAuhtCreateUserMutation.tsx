'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstance';

export const useAuthCreateUserMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({
      email,
      firstName,
      lastName,
    }: {
      email: string;
      firstName: string;
      lastName: string;
    }) => {
      return await axiosInstance.post('/users/register', {
        email,
        firstName,
        lastName,
      });
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};

interface ICreateUserWithGoogle {
  email?: string;
  fullname?: string;
  uid: string;
}

export const useAuthCreateUserWithGoogleMutation = ({
  onSuccess,
  onError,
}: any) => {
  const { mutate } = useMutation({

    mutationFn: async ({ email, fullname, uid }: ICreateUserWithGoogle) => {
      return await axiosInstance.post('/users/google', {
        email,
        fullname,
        uid,
      });
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
