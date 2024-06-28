'use client';
import { useCreateStock } from '@/features/stock/hooks/useCreateStock';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidasiCreateStock } from '@/supports/schema/createStockSchema';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { useGetStore } from '@/features/store/hooks/useGetStore';

export default function ModalCreateStock() {
  const { createStock } = useCreateStock();
  const { dataStore } = useGetStore();
  const { dataProduct } = useGetProduct();
  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="btn bg-gray-800 text-white hover:bg-gray-800"
      >
        Create Stock
      </label>
      <Formik
        initialValues={{
          stock: '',
          productId: '',
          storeId: '',
        }}
        validationSchema={ValidasiCreateStock}
        onSubmit={(values, { resetForm }) => {
          try {
            createStock({
              stock: parseInt(values.stock),
              productId: parseInt(values.productId),
              storeId: parseInt(values.storeId),
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
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box w-[50vw]">
                    <h3 className="text-lg font-semibold text-center">
                      CREATE STOCK
                    </h3>
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
                          {dataStore?.data.map((store: any, index: number) => {
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
                      disabled={!(dirty && isValid)}
                      type="submit"
                      className="btn bg-gray-800 text-white hover:bg-gray-800 w-full"
                    >
                      Submit
                    </button>
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
