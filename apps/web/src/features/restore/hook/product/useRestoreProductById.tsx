import { useRestoreProductByIdMutation } from '../../api/product/useRestoreProductByIdMutation';
import { useGetRestoreProduct } from './useGetRestoreProduct';
import { toast } from 'react-toastify';

export const useRestoreProductById = () => {
  const { refetch } = useGetRestoreProduct();
  const { mutateAsync: restoreProductById } = useRestoreProductByIdMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    restoreProductById,
  };
};
