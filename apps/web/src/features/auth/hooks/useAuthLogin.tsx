import { useAuthMutation } from '../api/useAuthMutation';
import { setCookie } from '@/utils/cookieHelper';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../../../supports/context/userContext';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

export const useAuthLogin = () => {
  const { dataUser, setDataUser }: any = useContext(UserContext);
  const router = useRouter();
  const { mutate: mutationAuthLogin } = useAuthMutation({
    onSuccess: (res: any) => {
      toast.success(res.data.message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      setCookie(res.data.data.accessToken);
      setDataUser({
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        email: res.data.data.email,
        roleId: res.data.data.roleId,
      });
      router.push('/');
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    mutationAuthLogin,
  };
};
