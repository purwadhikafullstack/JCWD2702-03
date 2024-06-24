import { useCreateProductMutation } from '../api/useCreateProductMutation';
import { toast } from 'react-toastify';

export const useCreateProduct = () => {
  const { mutate: createProduct } = useCreateProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    createProduct,
  };
};
