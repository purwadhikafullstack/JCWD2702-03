'use client';
import { CreateCategoryMutation } from '../api/useCreateCategoryMutation';

export const useCreateCategoryMutate = () => {
  const { mutate: mutateCreateCategory } = CreateCategoryMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    mutateCreateCategory,
  };
};
