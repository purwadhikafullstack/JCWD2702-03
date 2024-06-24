'use client';
import { toast } from 'react-toastify';
import { useCreateUserProfileMutation } from '../api/useCreateUserProfileMutation';

export const useCreateProfile = () => {
  const { mutate: mutationCreateUserProfile } = useCreateUserProfileMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    mutationCreateUserProfile,
  };
};
