import { useCreateProductMutation } from '../api/useCreateProductMutation';
import { toast } from 'react-toastify';
import { useGetProduct } from './useGetProduct';

export const useCreateProduct = () => {
  const { refetch } = useGetProduct();
  const { mutateAsync: createProduct } = useCreateProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    createProduct,
  };
};
