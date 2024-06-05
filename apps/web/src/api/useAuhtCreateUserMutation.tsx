'use client'
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useAuthCreateUserMutation = ({onSuccess, onError} : any) =>{
  const { mutate } = useMutation({
    mutationFn: async ({email, password} : {email: string, password: string}) => {
      return await axios.post('http://localhost:8000/register', {
        email, password
      })
    },

    onSuccess,
    onError
  })

  return {
    mutate
  }
}