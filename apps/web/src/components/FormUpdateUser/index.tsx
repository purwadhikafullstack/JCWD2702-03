import Link from 'next/link';
export default function FormUpdateUser() {
  return (
    <div className=''>
    <Link href={'/dashboard/user/update/'}>
      <button className="btn bg-[#28b293] w-[300px] text-white ">Update Profile</button>
    </Link>
    </div>
  );
}
