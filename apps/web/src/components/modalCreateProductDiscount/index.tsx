'use client';
import { useCreateProductDiscount } from '@/features/product/hooks/useCreateProductDiscount';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

export default function ModalCreateProductDiscount(params: any) {
  const { createProductDiscount } = useCreateProductDiscount();
  const { dataProduct } = useGetProduct();
  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="btn bg-gray-800 text-white hover:bg-gray-800"
      >
        Create Discount Product
      </label>
      <Formik
        initialValues={{
          productId: '',
          pieces: '',
          expired: '',
        }}
        //   validationSchema={ValidasiCreateStore}
        onSubmit={(values, { resetForm }) => {
          try {
            createProductDiscount({
              productId: parseInt(values.productId),
              pieces: parseInt(values.pieces),
              expired: values.expired,
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
                      CREATE PRODUCT DISCOUNT
                    </h3>
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
                        {/* <ErrorMessage
                            name="productId"
                            component="div"
                            className="text-red-500"
                          /> */}
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Pieces</span>
                        </div>
                        <Field
                          type="number"
                          name="pieces"
                          placeholder="Input Pieces Discount"
                          className="input input-bordered"
                        />
                        {/* <ErrorMessage
                            name="pieces"
                            component="div"
                            className="text-red-500"
                          /> */}
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Expired</span>
                        </div>
                        <Field
                          type="date"
                          name="expired"
                          placeholder="Select Expired Discount"
                          className="input input-bordered"
                        />
                        {/* <ErrorMessage
                            name="expired"
                            component="div"
                            className="text-red-500"
                          /> */}
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
