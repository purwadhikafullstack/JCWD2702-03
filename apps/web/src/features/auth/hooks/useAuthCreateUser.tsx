import { useAuthCreateUserMutation, useAuthCreateUserWithGoogleMutation } from "@/features/auth/api/useAuhtCreateUserMutation"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


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

export const useAuthCreateUserWithGoogle = () =>{
  const router = useRouter()
  const { mutate: mutationCreateUserWithGoogle } = useAuthCreateUserWithGoogleMutation({
    onSuccess: (res: any) =>{
      toast.success(res.data.message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      router.push('/auth/login')
    },
    onError: (err: any) =>{
      
      toast.error(err.response.data.message);
    }
  })

  return{
    mutationCreateUserWithGoogle
  }
}