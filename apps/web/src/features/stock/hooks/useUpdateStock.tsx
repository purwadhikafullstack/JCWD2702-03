import { useUpdateStockMutation } from '../api/useUpdateStockMutation';
import { toast } from 'react-toastify';

export const useUpdateStock = () => {
  const { mutate: updateStock } = useUpdateStockMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      console.log(res);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
      console.log(err);
    },
  });
  return {
    updateStock,
  };
};
