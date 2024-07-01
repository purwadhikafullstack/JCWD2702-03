import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full py-20">
      <div className="border w-[70vw]">
        <div className="flex px-10 py-4 gap-10 ">
          <Link href="/dashboard/user/">
          <p className="font-semibold">Biodata Diri</p>
          </Link>
          <Link href="/dashboard/address">
          <p className="font-semibold"> Daftar Alamat</p>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
