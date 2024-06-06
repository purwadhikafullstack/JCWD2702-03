import { useAuthCreateUserMutation } from "@/api/useAuhtCreateUserMutation"
import { toast } from "react-toastify";

export const useAuthCreateUser = () =>{
  const { mutate: mutationCreateUser } = useAuthCreateUserMutation({
    onSuccess: (res: any) =>{
      toast.success(res.data.message);
    },
    onError: (err: any) =>{
      toast.error(err.response.data.message);
    }
  })

  return {
    mutationCreateUser
  }
}