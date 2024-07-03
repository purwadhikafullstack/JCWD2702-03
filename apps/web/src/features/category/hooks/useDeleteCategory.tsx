import { useDeleteCategoryMutation } from '../api/useDeleteCategoryMutation';
import { toast } from 'react-toastify';

export const useDeleteCategory = () => {
  const { mutateAsync: deleteCategory } = useDeleteCategoryMutation({
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  return {
    deleteCategory,
  };
};
