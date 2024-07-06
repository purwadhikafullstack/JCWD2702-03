import { useUpdateProductMutation } from '../api/useUpdateProductMutation';
import { toast } from 'react-toastify';
import { useFilterProduct } from './useFilterProduct';
import { useRouter } from 'next/navigation';

export const useUpdateProduct = (
  productName: string,
  category: any,
  page: any,
) => {
  const nav = useRouter();
  const { refetch } = useFilterProduct(productName, category, page);
  const { mutateAsync: updateProduct } = useUpdateProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      if (window.confirm('Are you sure you want to save the changes?')) {
        nav.push('/admin/product');
      }
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
