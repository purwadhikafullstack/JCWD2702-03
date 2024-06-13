import { useAuthMutation } from '../api/useAuthMutation';
import { setCookie } from '@/utils/cookieHelper';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../../../supports/context/userContext';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
// import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slice/userSlice';

export const useAuthLogin = () => {
  const { dataUser, setDataUser }: any = useContext(UserContext);
  // const dispatch = useDispatch()
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
      setDataUser({
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        email: res.data.data.email,
        roleId: res.data.data.roleId,
      });
      setCookie(res.data.data.accessToken);
      
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
