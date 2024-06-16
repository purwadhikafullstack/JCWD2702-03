import { useCreateStoreMutation } from '../api/useCreateStoreMutation';
import { toast } from 'react-toastify';

export const useCreateStore = () => {
  const { mutate: createStore } = useCreateStoreMutation({
    onSuccess: (res: any) => {
      //   toast.success(res.data.message);
      console.log(res);
    },
    onError: (err: any) => {
      //   toast.error(err.response.data.message);
      console.log(err);
    },
  });
  return {
    createStore,
  };
};
