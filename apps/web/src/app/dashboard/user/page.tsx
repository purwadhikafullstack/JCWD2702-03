'use client';
import BiodataUser from '@/components/biodataUser';
import { useGetUserProfileResult } from '@/features/user/hooks/useGetUserProfile';

export default function DashboardUser() {
  const { dataUser } = useGetUserProfileResult();

  return (
    <div className="">
      <BiodataUser
        fullname={dataUser?.userProfile?.fullname}
        email={dataUser?.email}
        birthdate={dataUser?.userProfile?.birthDate}
        profile_images={dataUser?.userProfile?.UserImagesProfile[0]?.url}
      />
    </div>
  );
}
