import { useCreateStockMutation } from '../api/useCreateStockMutation';
import { toast } from 'react-toastify';

export const useCreateStock = () => {
  const { mutate: createStock } = useCreateStockMutation({
    onSuccess: (res: any) => {
      // toast.success(res.data.message);
      console.log(res);
    },
    onError: (err: any) => {
      //   toast.error(err.response.data.message);
      console.log(err);
    },
  });

  return {
    createStock,
  };
};
