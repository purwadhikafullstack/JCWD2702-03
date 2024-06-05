'use client';

import { CreateProductMutation } from '../api/useCreateProductMutation';

export const useCreateProductMutate = () => {
  const { mutateAsync: mutateCreateProduct } = CreateProductMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    mutateCreateProduct,
  };
};
