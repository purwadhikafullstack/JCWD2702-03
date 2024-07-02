'use client';
import { CreateCategoryMutation } from '../api/useCreateCategoryMutation';
import { toast } from 'react-toastify';
import { useGetCategory } from './useGetCategory';
import { useGetFilterCategory } from './useGetFilterCategory';

export const useCreateCategoryMutate = (page: any) => {
  // const { refetch } = useGetCategory();
  const { refetchCategory } = useGetFilterCategory(page);
  const { mutateAsync: mutateCreateCategory } = CreateCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetchCategory();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    mutateCreateCategory,
  };
};
