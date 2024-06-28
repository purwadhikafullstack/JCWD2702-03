import Link from 'next/link';
export default function FormStock({ stockData }: any) {
  return (
    <div>
      <div className="text-gray-800 h-full w-full">
        <h2 className="text-2xl font-semibold leading-tight pb-4">
          Data Stock
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
                <th className="p-3">Stock</th>
                <th className="p-3">Product</th>
                <th className="p-3">Store</th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {stockData?.data.map((stock: any, i: number) => (
                <tr
                  key={i}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{stock.stock}</p>
                  </td>
                  <td>
                    <p>{stock.product.name}</p>
                  </td>
                  <td>
                    <p>{stock.store.name}</p>
                  </td>
                  <td></td>
                  <td></td>
                  <td className="p-3 text-center flex gap-2">
                    <Link href={`/admin/stock/update/${stock.id}`}>
                      <button className="btn btn-success btn-sm text-xs w-14 text-white">
                        Edit
                      </button>
                    </Link>
                    <button className="btn btn-error btn-sm text-xs w-14 text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
