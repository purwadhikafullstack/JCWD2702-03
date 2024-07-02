'use client';
import ModalCreateProfile from '@/components/modalCreateUser';
import Image from 'next/image';
import { useAuthResetPasswordRequest } from '@/features/auth/hooks/useAuthResetPassword';
import FormUpdateUser from '../FormUpdateUser';

export default function BiodataUser({
  fullname,
  email,
  birthdate,
  profile_images,
}: any) {
  const { mutateResetPassword } = useAuthResetPasswordRequest();

  return (
      <div className="flex flex-col-2 w-[70vw] border">
        <div className="">
          <div className="border h-[50vh] w-[20vw] mx-4 mt-10 rounded-lg">
            <div className="pt-4 flex justify-center">
              {profile_images ? (
                <Image
                  src={'http://localhost:8000/' + profile_images}
                  alt="Foto Profile"
                  width={10000}
                  height={10000}
                  className="h-[175px] w-[200px] rounded-full"
                />
              ) : (
                <Image
                  src="/avatar.jpeg"
                  alt="Foto Profile"
                  width={10000}
                  height={10000}
                  className="h-[175px] w-[200px] object-cover"
                />
              )}
            </div>
            <p className="text-center text-sm pt-6 px-2">
              Besar file: maksimum 1.000.000 bytes (1 Megabytes). Ekstensi file
              yang diperbolehkan: .JPG .JPEG .PNG .WEBP .GIF
            </p>
          </div>
          <div className="px-4 py-4">
            <button
              onClick={mutateResetPassword as any}
              className="border rounded h-[50px] w-[20vw] font-semibold"
            >
              Ubah Kata Sandi
            </button>
          </div>
        </div>
        <div className="px-10 py-10 w-[60vw] flex flex-col">
          <p className="font-semibold">Ubah Biodata Diri</p>
          <span className="pt-4 font-semibold"> Nama </span> {fullname}
          <span className="pt-4 font-semibold"> Email </span> {email}
          <span className="pt-4 font-semibold"> Tanggal Lahir </span>{' '}
          {birthdate?.slice(0, 10)}
          <div className="flex pt-4 gap-4">
            <ModalCreateProfile />
            <FormUpdateUser />
          </div>
        </div>
      </div>
  );
}
