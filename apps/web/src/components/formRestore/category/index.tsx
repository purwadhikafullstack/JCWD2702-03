import Link from 'next/link';
import { useRestoreCategory } from '@/features/restore/hook/category/useRestoreCategory';
import { useRestoreCategoryById } from '@/features/restore/hook/category/useRestoreCategoryById';
export default function FormRestoreCategory({ restore }: any) {
  const { restoreCategory } = useRestoreCategory();
  const { restoreCategoryById } = useRestoreCategoryById();

  const restoreAll = () => {
    restoreCategory();
  };
  return (
    <div>
      <div className="text-gray-800 h-full w-full">
        <h2 className="text-2xl font-semibold leading-tight pb-4">
          Restore Data Category
        </h2>
        <div className="py-2 flex justify-end">
          <button
            className="btn bg-gray-800 text-white hover:bg-gray-800"
            onClick={() => {
              if (
                window.confirm('Are you sure you want to restore this data?')
              ) {
                restoreAll();
              }
            }}
          >
            Restore All
          </button>
        </div>
        <div className="h-[60vh] overflow-y-auto">
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
                <th className="p-3">ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Name Category</th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {restore?.data.map((trash: any, i: number) => (
                <tr
                  key={i}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{trash.id}</p>
                  </td>
                  <td className="p-3">
                    <p>{trash.deletedAt.slice(0, 10)}</p>
                  </td>
                  <td className="p-3">
                    <p>{trash.name}</p>
                  </td>
                  <td></td>
                  <td></td>
                  <td className="p-3 text-center flex gap-2">
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to restore this category?',
                          )
                        ) {
                          restoreCategoryById({ categoryId: trash.id });
                        }
                      }}
                      className="btn btn-warning btn-sm text-xs w-14 text-white"
                    >
                      Restore
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
