import { useAuthMutation } from "@/api/useAuthMutation"
import { setCookie } from "@/utils/cookieHelper";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useAuthLogin = () =>{
  const router = useRouter()
  const { mutate: mutationAuthLogin } = useAuthMutation({
    onSuccess: (res:any) => {
      toast.success(res.data.message);
      setCookie(res.data.data.accessToken)
      router.push('/')
    },
    onError: (err: any) =>{
      toast.error(err.response.data.message);
    }
  })
  
  return{
    mutationAuthLogin
  }
}