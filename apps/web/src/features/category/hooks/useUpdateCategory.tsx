import { useUpdateCategoryMutation } from '../api/useUpdateCategoryMutation';
import { toast } from 'react-toastify';

export const useUpdateCategory = () => {
  const { mutate: updateCategory } = useUpdateCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    updateCategory,
  };
};
