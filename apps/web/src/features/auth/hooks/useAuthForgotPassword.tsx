'use client';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuthForgotPasswordMutation } from "../api/useAuthForgotPasswordMutation"

export const useAuthForgotPassword = () => {
  const router = useRouter()
  const { mutate: mutationForgotPassword } = useAuthForgotPasswordMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message);
      router.push('/auth/login')      
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    }
  })
  return{
    mutationForgotPassword
  }
}