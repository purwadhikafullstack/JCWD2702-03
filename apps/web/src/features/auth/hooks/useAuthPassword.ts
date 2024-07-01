import { toast } from 'react-toastify';
import { useAuthPasswordVerify } from '../api/useAuthPasswordVerify';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useContext } from 'react';
import { removeCookie } from '@/utils/cookieHelper';
import { UserContext } from '../../../supports/context/userContext';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

export const useAuthPassword = () => {
  const { dataUser, setDataUser }: any = useContext(UserContext);
  const [isLogin, setIsLogin]: any = useState(false);
  const router = useRouter();
  const { mutate: mutatePassword } = useAuthPasswordVerify({
    onSuccess: async (res: any) => {
      toast.success(res.data.message);
      await removeCookie();
      setDataUser(null);
      setIsLogin(false);
      router.push('/auth/login');
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutatePassword,
  };
};
