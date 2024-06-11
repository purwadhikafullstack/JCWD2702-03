'use client';
import { getCookie } from '@/utils/cookieHelper';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAuthKeepLoginMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async () => {
      const cookie = await getCookie();
      
      return await axios.post(
        'http://localhost:8000/auth/login/keep-login',
        {},
        {
          headers: {
            accesstoken: cookie?.value,
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
