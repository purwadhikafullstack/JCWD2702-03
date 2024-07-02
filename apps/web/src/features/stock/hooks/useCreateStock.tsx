import { useCreateStockMutation } from '../api/useCreateStockMutation';
import { toast } from 'react-toastify';
import { useGetFilterStock } from './useFilterStock';

export const useCreateStock = (page: any) => {
  const { refetch } = useGetFilterStock(page);
  const { mutateAsync: createStock } = useCreateStockMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    createStock,
  };
};
