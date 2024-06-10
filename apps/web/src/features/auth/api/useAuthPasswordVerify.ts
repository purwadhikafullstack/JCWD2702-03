'use client'
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useAuthPasswordVerify = ({ onSuccess, onError}: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({accesstoken, password, confirmPassword} : {accesstoken: string, password: string, confirmPassword: string}) => {
      return await axios.post('http://localhost:8000/register/users-verification', {
        password,
        confirmPassword
      }, {
        headers: {
          accesstoken: accesstoken
        }
      })
    },

    onSuccess,
    onError
  })
  
  return{
    mutate
  }
}