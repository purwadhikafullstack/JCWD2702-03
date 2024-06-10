import ModalCreateProduct from '@/components/modalCreateProduct';
import { FormProduct } from '@/components/formProduct';

export default function ProductAdminPage() {
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">PRODUCT</h1>
        <div className="flex gap-10 pb-5">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Category Product :</span>
            </div>
          </label>
          <select name="" id="">
            <option value="">Choose Category</option>
            <option value="">Rempah - Rempah</option>
            <option value="">Rempah - Rempah</option>
            <option value="">Rempah - Rempah</option>
          </select>
        </div>
        <div className="flex">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Search Product :</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Input Name to Search Product"
              className="input input-bordered w-[20vw]"
            />
          </label>
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
