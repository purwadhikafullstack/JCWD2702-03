import { SidebarDashboard } from '@/components/SidebarDashboard';

export default function DashboardLayout({ children }: any) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 ">
        <SidebarDashboard />
      </div>
      <div className="col-span-10 h-[100vh]">{children}</div>
    </div>
  );
}
