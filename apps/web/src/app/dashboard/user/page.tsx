'use client';
import { useAuthResetPasswordRequest } from '@/features/auth/hooks/useAuthResetPassword';
import UserSideBar from '../../../components/userDashboard/userSideBar';
export default function DashboardUser() {
  const { mutateResetPassword } = useAuthResetPasswordRequest();
  return (
    <div className="flex">
      <UserSideBar></UserSideBar>
      <div className="flex w-full h-[100vh] justify-center items-center">
        <button onClick={mutateResetPassword as any} className='bg-red-200'>Reset Password</button>
      </div>
    </div>
  );
}
