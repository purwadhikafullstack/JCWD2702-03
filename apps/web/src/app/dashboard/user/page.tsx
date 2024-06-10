import UserSideBar from '../../../components/userDashboard/userSideBar';
export default function DashboardUser() {
  return (
    <div className="flex">
      <UserSideBar></UserSideBar>
      <div className='flex w-full h-[100vh] justify-center items-center'>
        <h1>Dashboard User</h1>
      </div>
    </div>
  );
}
