export const FormProduct = () => {
  return (
    <div className="text-gray-800">
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
            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Microsoft Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-600">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="text-gray-600">Tuesday</p>
              </td>
              <td className="p-3">
                <p>$15,792</p>
              </td>
              <td className="p-3 text-center flex gap-2">
                <button className="btn btn-info btn-sm text-xs w-14 text-white">
                  View
                </button>
                <button className="btn btn-success btn-sm text-xs w-14 text-white">
                  Edit
                </button>
                <button className="btn btn-error btn-sm text-xs w-14 text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
