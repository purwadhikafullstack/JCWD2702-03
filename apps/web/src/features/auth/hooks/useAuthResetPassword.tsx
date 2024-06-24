'use client';
import { toast } from 'react-toastify';
import { useAuthResetPasswordMutation } from '../api/useAuthRequestPasswordMutation';

export const useAuthResetPasswordRequest = () => {
  const { mutate: mutateResetPassword } = useAuthResetPasswordMutation({
    onSuccess: (res: any) => {
    toast.success(res.data.message);
    },
    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });

  return {
    mutateResetPassword,
  };
};
