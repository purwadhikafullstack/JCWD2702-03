'use client'
import { axiosInstance } from "@/utils/axiosInstance"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useAuthMutation = ({onSuccess, onError}: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, password}: {email: string, password: string}) => {
      return await axiosInstance.post('/auth/login', {
        email, password
      })
    },

    onSuccess,
    onError
  })
  
  return{
    mutate
  }
}
