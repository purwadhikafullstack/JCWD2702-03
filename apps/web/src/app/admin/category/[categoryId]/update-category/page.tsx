'use client';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useUpdateCategory } from '@/features/category/hooks/useUpdateCategory';
import { useGetCategoryById } from '@/features/category/hooks/useGetCategoryById';
import { useRouter } from 'next/navigation';

export default function UpdateCategoryPage(params: any) {
  const { dataCategoryById } = useGetCategoryById(params.params.categoryId);
  const { updateCategory } = useUpdateCategory();

  const nav = useRouter();
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold">Update Product</h1>
        <div className="divider w-full"></div>
        {dataCategoryById ? (
          <Formik
            initialValues={{
              name: dataCategoryById?.name,
            }}
            onSubmit={(values, { resetForm }) => {
              updateCategory({
                name: values.name,
                categoryId: params.params.categoryId,
              });
              resetForm();
            }}
          >
            {({ dirty, isValid }) => {
              return (
                <>
                  <Form>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Name Category</span>
                        </div>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Input Name Product"
                          className="input input-bordered"
                        />
                      </label>
                    </div>
                    <button
                      disabled={!(dirty && isValid)}
                      onClick={() => {
                        nav.push('/admin/category');
                      }}
                      type="submit"
                      className="btn bg-gray-800 text-white hover:bg-gray-800 w-full"
                    >
                      Sace Change
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
