'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { IoBagCheckOutline } from 'react-icons/io5';
import { useAuthKeepLogin } from '@/features/auth/hooks/useAuthKeepLogin';
import { useEffect, useState, useContext } from 'react';
import { removeCookie } from '@/utils/cookieHelper';
import { UserContext } from '../supports/context/userContext';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

export const Header = () => {
  const { mutationKeepLogin }: any = useAuthKeepLogin();
  const { dataUser, setDataUser }: any = useContext(UserContext);
  const [isLogin, setIsLogin]: any = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await removeCookie();
    setDataUser(null);
    setIsLogin(false);
    toast.success('Logout Success!', {
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
    router.push('/');
  };

  const handleKeepLogin = () => {
    if (isLogin == false) {
      mutationKeepLogin();
      setIsLogin(false);
    }
  };

  useEffect(() => {
    handleKeepLogin();
    setIsLogin(true);
  }, []);

  return (
    <div>
      <header className="p-4 bg-[#28b293] text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link href={'/'}>
                <div className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white h-16">
                  Beranda
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link href={'/belanja'}>
                <div className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white h-16">
                  Belanja
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link href={'/bantuan'}>
                <div className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white h-16">
                  Bantuan
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className="flex items-center md:space-x-4">
            <div className="relative border rounded-lg">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring "
                >
                  <CiSearch className="w-4 h-4 text-gray-800" />
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
              />
            </div>

            {dataUser ? (
              <>
                <div className="flex items-center justify-center rounded-full bg-concrete hover:bg-mercury">
                  <IoBagCheckOutline className="w-8 h-8 text-white" />
                </div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 bg-black text-white"
                  >
                    {dataUser.firstName} {dataUser.lastName}{' '}
                    <IoMdArrowDropdown />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
                  >
                    <li>
                      <Link
                        href={'/dashboard/user'}
                        className=" bg-regent_gray font-bold text-white hover:bg-bombay"
                      >
                        <p className="text-black">Profile</p>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="font-bold text-black hover:border-hover_eggplant hover:bg-hover_eggplant"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex gap-4">
                <Link
                  href={'/auth/login'}
                  className="flex h-[40px] w-[100px] items-center justify-center rounded-md font-bold text-white bg-black"
                >
                  Login
                </Link>
                <Link
                  href={'/auth/register '}
                  className="flex h-[40px] w-[100px] items-center justify-center rounded-md font-bold text-white bg-black"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
