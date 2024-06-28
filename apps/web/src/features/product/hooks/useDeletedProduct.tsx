import { useDeletedProductMutation } from '../api/useDeletedProductMutation';
import { useGetProduct } from './useGetProduct';

export const useDeletedProduct = () => {
  const { refetch } = useGetProduct();
  const { mutateAsync: deleteProduct } = useDeletedProductMutation({
    onSuccess: (res: any) => {
      console.log(res);
      refetch();
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    deleteProduct,
  };
};
