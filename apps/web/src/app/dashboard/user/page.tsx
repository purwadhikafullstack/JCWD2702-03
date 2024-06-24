'use client';
import ModalCreateProfile from '@/components/modalCreateUser';
import { useAuthResetPasswordRequest } from '@/features/auth/hooks/useAuthResetPassword';
import { useCreateProfile } from '@/features/user/hooks/useCreateUserProfile';
import Image from 'next/image';

export default function DashboardUser() {
  const { mutateResetPassword } = useAuthResetPasswordRequest();
  const { mutationCreateUserProfile } = useCreateProfile()
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border h-[80vh] w-[70vw] rounded-lg">
        <div className="flex px-10 py-4">
          <p className="font-semibold">Biodata Diri</p>
        </div>
        <hr />

        <div className="flex flex-col-2">
          <div className="">
            <div className="border h-[50vh] w-[20vw] mx-4 mt-10 rounded-lg">
              <div className='pt-4 flex justify-center'>
                <Image
                  src="/avatar.jpeg"
                  alt="Foto Profile"
                  width={10000}
                  height={10000}
                  className="h-[175px] w-[200px] object-cover"
                />
              </div>
              <p className="text-center text-sm pt-6 px-2">
                Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                file yang diperbolehkan: .JPG .JPEG .PNG .WEBP .GIF
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
            <p className="pt-6"> Nama: </p>
            <p className="pt-6"> Email: </p>
            <p className="pt-6"> Tanggal Lahir: </p>
            <div className='pt-4'>
              <ModalCreateProfile />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
