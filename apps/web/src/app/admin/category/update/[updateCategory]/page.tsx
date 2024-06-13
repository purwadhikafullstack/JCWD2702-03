'use client';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useUpdateCategory } from '@/features/category/hooks/useUpdateCategory';
import { useGetCategoryById } from '@/features/category/hooks/useGetCategoryById';
import { useRouter } from 'next/navigation';

export default function UpdateCategoryPage(params: any) {
  const [upload, setUpload]: any = useState([]);
  const { dataCategoryById } = useGetCategoryById(params.params.updateCategory);
  const { updateCategory } = useUpdateCategory();
  const onSetFile = (event: any) => {
    try {
      const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png', 'gif'];
      const files = [...event.target.files];
      files.forEach((file: any) => {
        if (
          !acceptedFormat.includes(
            file.name.split('.')[file.name.split('.').length - 1],
          )
        ) {
          throw { message: `${file.name} Format Not Acceptable` };
        }
        if (file.size > 100000) {
          throw { message: `${file.name} is too Large!` };
        }
      });
      if (files.length > 3) throw { message: `Selected File More Than 3` };
      setUpload(files);
    } catch (error) {
      console.log(error);
    }
  };
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
            onSubmit={(value, { resetForm }) => {
              const fd = new FormData();
              fd.append(
                'data',
                JSON.stringify({
                  name: value.name,
                }),
              );
              upload.forEach((file: any) => {
                fd.append('image_category', file);
              });
              updateCategory({
                categoryId: params.params.updateCategory,
                fd: fd,
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
                    <fieldset className="w-full pb-4">
                      <label className="form-control ">
                        <div className="label">
                          <span className="label-text">
                            Upload Category Image
                          </span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) => onSetFile(event)}
                          multiple
                          placeholder="Upload Product Image"
                          className="px-8 py-10 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100"
                        />
                      </label>
                    </fieldset>
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
