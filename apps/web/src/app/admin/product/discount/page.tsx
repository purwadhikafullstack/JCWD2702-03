'use client';
import { useCreateProductDiscount } from '@/features/discount/hooks/useCreateProductDiscount';
import { useGetProduct } from '@/features/product/hooks/useGetProduct';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

export default function CreateProductDiscount() {
  const { createProductDiscount } = useCreateProductDiscount();
  const { dataProduct } = useGetProduct();
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">Discount Product</h1>
        <Formik
          initialValues={{
            productId: '',
            pieces: '',
            expired: '',
          }}
          onSubmit={(value, { resetForm }) => {
            try {
              createProductDiscount({
                productId: parseInt(value.productId),
                pieces: parseInt(value.pieces),
                expired: value.expired,
              });
              //   resetForm();
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
                        <span className="label-text">Discount Product</span>
                      </div>
                      <Field
                        type="text"
                        name="pieces"
                        placeholder="Input pieces"
                        className="input input-bordered"
                      />
                      <ErrorMessage
                        name="pieces"
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
                        <span className="label-text">Expired</span>
                      </div>
                      <Field
                        type="date"
                        name="expired"
                        placeholder="Input expired"
                        className="input input-bordered"
                      />
                      <ErrorMessage
                        name="expired"
                        component="div"
                        className="text-red-500"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
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
      </div>
    </div>
  );
}
