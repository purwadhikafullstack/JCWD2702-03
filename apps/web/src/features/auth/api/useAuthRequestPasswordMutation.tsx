'use client'
import { axiosInstanceInterceptor } from "@/utils/axiosInstanceInterceptor"
import { useMutation } from "@tanstack/react-query"

export const useAuthResetPasswordMutation = ({ onSuccess, onError}: any) => {
  const { mutate } = useMutation({
    mutationFn: async () => {
      return await axiosInstanceInterceptor.put('/register/reset-password')
    },

    onSuccess,
    onError
  })
  
  return{
    mutate
  }
}