import { useUpdateStockMutation } from '../api/useUpdateStockMutation';
import { toast } from 'react-toastify';
import { useGetStockQuery } from '../api/useGetStockQuery';

export const useUpdateStock = () => {
  const { refetch } = useGetStockQuery();
  const { mutateAsync: updateStock } = useUpdateStockMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    updateStock,
  };
};
