'use client'
import { MdAccountCircle } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { CiHeart, CiLocationOn } from 'react-icons/ci';
import Link from 'next/link'

export default function UserSideBar() {

  return (
    <div className="bg-downriver border-downriver flex min-h-screen w-[20%] flex-col items-start justify-start gap-4 rounded-md border-2 p-10 text-black">
      <Link
        href={'/dashboard/user'}
        className="btn bg-downriver border-downriver hover:bg-scienceBlue hover:border-scienceBlue flex w-full justify-start text-black"
      >
        <MdAccountCircle size={25} />
        Profile
      </Link>
      <Link
        href={'/cart'}
        className="btn bg-downriver border-downriver hover:bg-scienceBlue hover:border-scienceBlue flex w-full justify-start text-black"
      >
        <FaCartShopping size={20} />
        Cart
      </Link>
      <Link
        href={'/shipping-address'}
        className="btn bg-downriver border-downriver hover:bg-scienceBlue hover:border-scienceBlue flex w-full justify-start text-black"
      >
        <CiLocationOn size={25} />
        Shipping Address
      </Link>
    </div>
  );
}
