'use client'

import { axiosInstanceInterceptor } from "@/utils/axiosInstanceInterceptor"
import { useMutation } from "@tanstack/react-query"

export const useUpdateUserProfileMutation = ({onSuccess, onError}: any) => {
  const { mutate } = useMutation({
    mutationFn: async() => {
      return await axiosInstanceInterceptor.put('/users/profile/update')
    },

    onSuccess,
    onError
  })

  return{
    mutate
  }
}