import { useCreateProductMutation } from '../api/useCreateProductMutation';
import { toast } from 'react-toastify';
import { useGetProduct } from './useGetProduct';
import { useFilterProduct } from './useFilterProduct';

export const useCreateProduct = (
  productName: string,
  category: any,
  page: any,
) => {
  const { refetch } = useFilterProduct(productName, category, page);
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
