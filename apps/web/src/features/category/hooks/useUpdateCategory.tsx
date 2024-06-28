import { useUpdateCategoryMutation } from '../api/useUpdateCategoryMutation';
import { toast } from 'react-toastify';
import { useGetCategory } from './useGetCategory';
export const useUpdateCategory = () => {
  const { refetch } = useGetCategory();
  const { mutateAsync: updateCategory } = useUpdateCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    updateCategory,
  };
};
