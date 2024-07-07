import { useDeletedProductMutation } from '../api/useDeletedProductMutation';
import { useFilterProduct } from './useFilterProduct';
import { toast } from 'react-toastify';

export const useDeletedProduct = (
  productName: string,
  category: any,
  page: any,
) => {
  const { refetch: refetchFilterProduct } = useFilterProduct(
    productName,
    category,
    page,
  );
  const { mutateAsync: deleteProduct } = useDeletedProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      if (window.confirm('Are you sure you want to delete this product?')) {
        window.location.reload();
      }

      refetchFilterProduct();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    deleteProduct,
  };
};
