'use client'
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useAuthMutation = ({onSuccess, onError}: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, password}: {email: string, password: string}) => {
      return await axios.post('http://localhost:8000/auth/login', {
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
