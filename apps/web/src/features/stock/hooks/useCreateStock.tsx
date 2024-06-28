import { useCreateStockMutation } from '../api/useCreateStockMutation';
import { toast } from 'react-toastify';
import { useGetStockQuery } from '../api/useGetStockQuery';

export const useCreateStock = () => {
  const { refetch } = useGetStockQuery();
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
