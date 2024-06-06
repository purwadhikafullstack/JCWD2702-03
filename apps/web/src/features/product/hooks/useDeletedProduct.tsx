import { useDeletedProductMutation } from '../api/useDeletedProductMutation';

export const useDeletedProduct = (id: string) => {
  const { mutate: deleteProduct } = useDeletedProductMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    deleteProduct,
  };
};
