import { useCreateProductDiscountMutation } from '../api/useCreateProductDiscountMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useCreateProductDiscount = () => {
  const nav = useRouter();
  const { mutateAsync: createProductDiscount } =
    useCreateProductDiscountMutation({
      onSuccess: (res: any) => {
        toast.success(res.data.message);
        if (window.confirm('Are you sure you want to add discount?')) {
          nav.push('/admin/product');
        }
      },
      onError: (err: any) => {
        toast.error(err.response.data.message);
      },
    });

  return {
    createProductDiscount,
  };
};
