import { useUpdateStockMutation } from '../api/useUpdateStockMutation';
import { toast } from 'react-toastify';

export const useUpdateStock = () => {
  const { mutate: updateStock } = useUpdateStockMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    updateStock,
  };
};
