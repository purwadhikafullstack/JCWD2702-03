'use client';
import { useGetStockById } from '@/features/stock/hooks/useGetStockById';
import { useUpdateStock } from '@/features/stock/hooks/useUpdateStock';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useGetStore } from '@/features/store/hooks/useGetStore';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidasiCreateStock } from '@/supports/schema/createStockSchema';
import { useRouter } from 'next/navigation';

export default function UpdateStockPage(params: any) {
  const { dataStockById } = useGetStockById(params.params.stockId);
  const { updateStock } = useUpdateStock();
  const { dataStore } = useGetStore();

  const { dataProduct } = useGetProduct();
  const nav = useRouter();
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">Update Stock</h1>
        {dataStockById ? (
          <Formik
            initialValues={{
              stock: dataStockById?.stock,
              productId: dataStockById?.productId,
              storeId: dataStockById?.storeId,
            }}
            validationSchema={ValidasiCreateStock}
            onSubmit={(value, { resetForm }) => {
              try {
                updateStock({
                  stockId: params.params.stockId,
                  stock: parseInt(value.stock),
                  productId: parseInt(value.productId),
                  storeId: parseInt(value.storeId),
                });
                resetForm();
              } catch (error) {
                console.log('Error', error);
              }
            }}
          >
            {({ dirty, isValid }) => {
              return (
                <>
                  <Form>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Stock</span>
                        </div>
                        <Field
                          type="text"
                          name="stock"
                          placeholder="Input Stock"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="stock"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Product</span>
                        </div>
                        <Field
                          component="select"
                          id="productId"
                          name="productId"
                          className="select select-bordered"
                          disabled
                        >
                          <option>Choose Product</option>
                          {dataProduct?.map((product: any, index: number) => {
                            return (
                              <option value={product.id} key={index}>
                                {product.name}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="productId"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Store</span>
                        </div>
                        <Field
                          component="select"
                          id="storeId"
                          name="storeId"
                          className="select select-bordered"
                        >
                          <option>Choose Store</option>
                          {dataStore?.map((store: any, index: number) => {
                            return (
                              <option value={store.id} key={index}>
                                {store.name}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="storeId"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to save the changes?',
                          )
                        ) {
                          nav.push('/admin/stock');
                        }
                      }}
                      disabled={!(dirty && isValid)}
                      className="btn bg-gray-800 text-white hover:bg-gray-800 w-full"
                    >
                      Save Change
                    </button>
                  </Form>
                </>
              );
            }}
          </Formik>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
}
