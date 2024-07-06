import { useRestoreProductMutation } from '../../api/product/useRestoreProductMutation';
import { useGetRestoreProduct } from './useGetRestoreProduct';
import { toast } from 'react-toastify';

export const useRestoreProduct = () => {
  const { refetch } = useGetRestoreProduct();
  const { mutateAsync: restoreProduct } = useRestoreProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    restoreProduct,
  };
};
