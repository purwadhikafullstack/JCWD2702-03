import Link from 'next/link';
import { IFormProductProps } from './type';
import { useDeletedProduct } from '@/features/product/hooks/useDeletedProduct';

export default function FormProduct({ productData, id }: any) {
  const { deleteProduct } = useDeletedProduct(id);
  return (
    <div className="text-gray-800 h-full w-full">
      <h2 className="text-2xl font-semibold leading-tight pb-4">
        Data Product
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="bg-gray-800 text-white">
            <tr className="text-left">
              <th className="p-3">Name Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Description</th>
              <th className="p-3">Image</th>
              <th className="p-3">Stock</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product: any, i: number) => (
              <tr
                key={i}
                className="border-b border-opacity-20 border-gray-300 bg-gray-50"
              >
                <td className="p-3">
                  <p>{product.name}</p>
                </td>
                <td className="p-3">
                  <p>
                    {product.price.toLocaleString('ID', {
                      style: 'currency',
                      currency: 'IDR',
                    })}
                  </p>
                </td>
                <td className="p-3">
                  <p>{product.description}</p>
                </td>
                <td className="p-3">
                  <p>
                    {'http://localhost:8000/' +
                      product.ProductImage.productImage}
                  </p>
                </td>
                <td className="p-3">
                  <p>$15,792</p>
                </td>
                <td className="p-3 text-center flex gap-2">
                  <Link href={`/product/${product.id}`}>
                    <button className="btn btn-info btn-sm text-xs w-14 text-white">
                      View
                    </button>
                  </Link>
                  <button className="btn btn-success btn-sm text-xs w-14 text-white">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct({ id: String(id) })}
                    className="btn btn-error btn-sm text-xs w-14 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
