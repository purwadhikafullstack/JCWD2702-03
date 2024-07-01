import { toast } from 'react-toastify';
import { useCreateResendEmailMutation  } from '../api/useAuthCreateResendEmailMutation';
export const useAuthCreateResendEmail = () => {
  const { mutate: mutationResendEmail } = useCreateResendEmailMutation ({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
      
    }
  })

  return{
    mutationResendEmail
  }
}