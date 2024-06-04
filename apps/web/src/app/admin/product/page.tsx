import { ModalCreateProduct } from '@/components/modalCreateProduct';
import { FormProduct } from '@/components/formProduct';

export default function ProductAdminPage() {
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">PRODUCT</h1>
        <div className="flex gap-10 pb-5">
          <span>Category :</span>
          <select name="" id="">
            <option value="">Choose Category</option>
            <option value="">Rempah - Rempah</option>
            <option value="">Rempah - Rempah</option>
            <option value="">Rempah - Rempah</option>
          </select>
        </div>
        <div className="flex gap-2 pb-5">
          <h1>Name Product :</h1>
          <input type="text" name="" id="" placeholder="Search Product" />
        </div>
        <div className="flex items-end justify-end">
          <ModalCreateProduct />
        </div>
        <div className="divider w-full"></div>
        <div>
          <FormProduct />
        </div>
      </div>
    </div>
  );
}
