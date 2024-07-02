'use client'
import { axiosInstanceInterceptor } from "@/utils/axiosInstanceInterceptor"
import { useMutation } from "@tanstack/react-query"

export const useAuthForgotPasswordMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({email}: {email: string}) => {
      return await axiosInstanceInterceptor.put('/users/forgot-password', {email}) 
    },

    onSuccess,
    onError,
  })
  return{
    mutate
  }
}