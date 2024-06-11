'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAuthCreateUserMutation = ({ onSuccess, onError }: any) => {
  const { mutate } = useMutation({
    mutationFn: async ({
      email,
      firstName,
      lastName,
    }: {
      email: string;
      firstName: string;
      lastName: string;
    }) => {
      return await axios.post('http://localhost:8000/register', {
        email,
        firstName,
        lastName
      });
    },

    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};

interface ICreateUserWithGoogle{
  email?: string ,
  fullname?: string ,
  uid: string
}

export const useAuthCreateUserWithGoogleMutation = ({ onSuccess, onError }: any) =>{
  const {mutate} = useMutation({
    mutationFn: async({email, fullname, uid}: ICreateUserWithGoogle) => {
      return  await axios.post('http://localhost:8000/register/google', { email, fullname, uid })
    },

    onSuccess,
    onError,
  })

  return{
    mutate
  }
}
