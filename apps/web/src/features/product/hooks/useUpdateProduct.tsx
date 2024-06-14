import { useUpdateProductMutation } from '../api/useUpdateProductMutation';
import { toast } from 'react-toastify';

export const useUpdateProduct = () => {
  const { mutate: updateProduct } = useUpdateProductMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    updateProduct,
  };
};
