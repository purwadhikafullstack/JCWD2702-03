'use client'

import { axiosInstanceInterceptor } from "@/utils/axiosInstanceInterceptor"
import { useMutation } from "@tanstack/react-query"

export const useUpdateUserProfileMutation = ({onSuccess, onError}: any) => {
  const { mutate } = useMutation({
    mutationFn: async(fd: any) => {
      return await axiosInstanceInterceptor.put('/users/profile/update', fd)
    },

    onSuccess,
    onError
  })

  return{
    mutate
  }
}