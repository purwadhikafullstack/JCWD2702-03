import { useUpdateProductMutation } from '../api/useUpdateProductMutation';
import { toast } from 'react-toastify';
import { useGetProduct } from './useGetProduct';

export const useUpdateProduct = () => {
  const { refetch } = useGetProduct();
  const { mutateAsync: updateProduct } = useUpdateProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    updateProduct,
  };
};
