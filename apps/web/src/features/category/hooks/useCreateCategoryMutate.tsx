'use client';
import { CreateCategoryMutation } from '../api/useCreateCategoryMutation';
import { toast } from 'react-toastify';

export const useCreateCategoryMutate = () => {
  const { mutate: mutateCreateCategory } = CreateCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    mutateCreateCategory,
  };
};
