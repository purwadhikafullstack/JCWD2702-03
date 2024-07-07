import { useUpdateStockMutation } from '../api/useUpdateStockMutation';
import { toast } from 'react-toastify';
import { useGetFilterStock } from './useFilterStock';

export const useUpdateStock = (page: any) => {
  const { refetch } = useGetFilterStock(page);
  const { mutateAsync: updateStock } = useUpdateStockMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
      window.location.reload()
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    updateStock,
  };
};
