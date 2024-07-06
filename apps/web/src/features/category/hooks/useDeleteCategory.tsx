import { useDeleteCategoryMutation } from '../api/useDeleteCategoryMutation';
import { toast } from 'react-toastify';
import { useGetFilterCategory } from './useGetFilterCategory';

export const useDeleteCategory = (page: any) => {
  const { refetchCategory } = useGetFilterCategory(page);
  const { mutateAsync: deleteCategory } = useDeleteCategoryMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      refetchCategory();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
  return {
    deleteCategory,
  };
};
