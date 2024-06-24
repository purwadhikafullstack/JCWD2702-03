import { toast } from "react-toastify";
import { useAuthPasswordVerify } from "../api/useAuthPasswordVerify"
import { useRouter } from "next/navigation";

export const useAuthPassword = () => {
  const router = useRouter()
  const { mutate: mutatePassword } = useAuthPasswordVerify({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      router.push('/')
    },
    onError: (err: any) =>{
      toast.error(err.response.data.message);
    }
  })

  return{
    mutatePassword
  }
}