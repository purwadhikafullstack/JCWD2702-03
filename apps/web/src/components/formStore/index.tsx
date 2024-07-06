import Link from 'next/link';
import { useDeleteStore } from '@/features/store/hooks/useDeleteStore';
export default function FormStorePage({ storeData, page }: any) {
  const { deleteStore } = useDeleteStore(page);
  return (
    <div>
      <div className="text-gray-800 h-full w-full">
        <h2 className="text-2xl font-semibold leading-tight pb-4">
          Data Store
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
                <th className="p-3">Name Store</th>
                <th className="p-3">Province</th>
                <th className="p-3">City</th>
                <th className="p-3">Address</th>
                <th className="p-3">Zip Code</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {storeData?.data.map((store: any, i: number) => (
                <tr
                  key={i}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{store.name}</p>
                  </td>
                  <td className="p-3">{store.province}</td>
                  <td className="p-3">
                    <p>{store.city}</p>
                  </td>
                  <td className="p-3">
                    <p>{store.address}</p>
                  </td>
                  <td className="p-3">
                    <p>{store.zip_code}</p>
                  </td>
                  <td className="p-3 text-center flex gap-2">
                    <Link href={`/admin/store/${store.id}`}>
                      <button className="btn btn-info btn-sm text-xs w-14 text-white">
                        View
                      </button>
                    </Link>
                    <Link href={`/admin/store/update/${store.id}`}>
                      <button className="btn btn-success btn-sm text-xs w-14 text-white">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to delete this store?',
                          )
                        ) {
                          deleteStore({ storeId: store.id });
                        }
                      }}
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
    </div>
  );
}
