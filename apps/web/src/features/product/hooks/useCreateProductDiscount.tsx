import { useCreateProductDiscountMutation } from '../api/useCreateProductDiscountMutation';
import { toast } from 'react-toastify';

export const useCreateProductDiscount = () => {
  const { mutateAsync: createProductDiscount } =
    useCreateProductDiscountMutation({
      onSuccess: (res: any) => {
        toast.success(res.data.message);
      },
      onError: (err: any) => {
        toast.error(err.response.data.message);
        console.log(err);
      },
    });

  return {
    createProductDiscount,
  };
};
