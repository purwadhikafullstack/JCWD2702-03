'use client';
import ModalCreateCategory from '@/components/modalCreateCategory';
import FormCategoryPage from '@/components/formCategory';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';

export default function ProductAdminPage() {
  const { dataCategory, isLoading } = useGetCategory();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg h-[50px]"></span>
        <div>Finding Category</div>
      </div>
    );
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">CATEGORY PRODUCT</h1>
        <div className="flex items-end justify-end pt-10">
          <ModalCreateCategory />
        </div>
        <div>
          <FormCategoryPage categoryData={dataCategory} />
        </div>
      </div>
    </div>
  );
}
