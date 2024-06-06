'use client';
import ModalCreateCategory from '@/components/modalCreateCategory';
import FormProduct from '@/components/formProduct';

export default function ProductAdminPage() {
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">CATEGORY</h1>
        <div className="flex items-end justify-end">
        <ModalCreateCategory />
        </div>
        <div className="divider w-full"></div>
        <div>
          <FormProduct />
        </div>
      </div>
    </div>
  );
}
