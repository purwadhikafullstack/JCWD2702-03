import { useAuthCreateUserMutation } from "@/features/auth/api/useAuhtCreateUserMutation"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useAuthCreateUser = () =>{
  const router = useRouter()
  const { mutate: mutationCreateUser } = useAuthCreateUserMutation({
    onSuccess: (res: any) =>{
      toast.success(res.data.message);
      router.push('/')
    },
    onError: (err: any) =>{
      toast.error(err.response.data.message);
    }
  })

  return {
    mutationCreateUser
  }
}