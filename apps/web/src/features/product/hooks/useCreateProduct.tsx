import { useCreateProductMutation } from '../api/useCreateProductMutation';

export const useCreateProduct = () => {
  const { mutate: createProduct } = useCreateProductMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    createProduct,
  };
};
