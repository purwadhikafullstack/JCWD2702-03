'use client'
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { toast } from "react-toastify"
import { useUpdateUserProfileMutation } from "../api/useUpdateUserProfileMutation"
import { useRouter } from 'next/navigation';

export const useUpdateUserProfile = () => {
  const router = useRouter()
  const { mutate: mutationUpdateUser } =  useUpdateUserProfileMutation({
    onSuccess: (res: any) => {
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
      router.push('/dashboard/user')
    },
    onError: (err: any) => {
      console.log(err)
    },
  })

  return{
    mutationUpdateUser
  }
}