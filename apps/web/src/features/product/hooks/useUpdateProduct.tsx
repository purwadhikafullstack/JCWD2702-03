import { useUpdateProductMutation } from '../api/useUpdateProductMutation';

export const useUpdateProduct = () => {
  const { mutate: updateProduct } = useUpdateProductMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    updateProduct,
  };
};
