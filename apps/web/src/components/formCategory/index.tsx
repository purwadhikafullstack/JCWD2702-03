import Image from 'next/image';
import Link from 'next/link';

export default function FormCategoryPage({ categoryData }: any) {
  return (
    <div>
      <div className="text-gray-800 h-full w-full">
        <h2 className="text-2xl font-semibold leading-tight pb-4">
          Data Category
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
                <th className="p-3">Name Category</th>
                <th className="p-3"></th>
                <th className="p-3">Image</th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryData?.map((category: any, i: number) => (
                <tr
                  key={i}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{category.name}</p>
                  </td>
                  <td></td>
                  <td>
                    <Image
                      src={
                        'http://localhost:8000/' +
                        category.ProductCategoryImage[0].categoryUrl
                      }
                      alt={category.name}
                      width={10000}
                      height={10000}
                      priority={true}
                      quality={100}
                      className="w-[50px] h-[50px]"
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td className="p-3 text-center flex gap-2">
                    <Link href={`/admin/category/update/${category.id}`}>
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
