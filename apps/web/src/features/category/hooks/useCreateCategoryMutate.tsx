'use client';
import { CreateCategoryMutation } from '../api/useCreateCategoryMutation';
import { toast } from 'react-toastify';
import { useGetCategory } from './useGetCategory';
import { useGetFilterCategory } from './useGetFilterCategory';

export const useCreateCategoryMutate = () => {
  const { refetch } = useGetCategory();
  const { mutateAsync: mutateCreateCategory } = CreateCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    mutateCreateCategory,
  };
};
