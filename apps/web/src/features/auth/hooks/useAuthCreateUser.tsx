import { useAuthCreateUserMutation, useAuthCreateUserWithGoogleMutation } from "@/features/auth/api/useAuhtCreateUserMutation"
import { setCookie } from "@/utils/cookieHelper";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { useContext } from 'react'
import { UserContext } from "@/supports/context/userContext";


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
  const { dataUser, setDataUser }: any = useContext(UserContext)
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
      setCookie(res.data.data.accesstoken);
      setDataUser({
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        email: res.data.data.email,
        roleId: res.data.data.roleId,
      })
      router.push('/')
    },
    onError: (err: any) =>{
      toast.error(err.response.data.message);
      console.log(err);
      
    }
  })

  return{
    mutationCreateUserWithGoogle
  }
}