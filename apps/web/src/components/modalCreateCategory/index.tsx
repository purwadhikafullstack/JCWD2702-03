'use client';
import { useCreateCategoryMutate } from '@/features/category/hooks/useCreateCategoryMutate';
import { ValidasiCreateCategory } from '@/supports/schema/createCategorySchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

export default function ModalCreateCategory() {
  const { mutateCreateCategory } = useCreateCategoryMutate();
  const [upload, setUpload]: any = useState([]);

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
  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="btn bg-gray-800 text-white hover:bg-gray-800"
      >
        Create Category
      </label>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={ValidasiCreateCategory}
        onSubmit={(values, { resetForm }) => {
          try {
            const fd = new FormData();
            fd.append(
              'data',
              JSON.stringify({
                name: values.name,
              }),
            );
            upload.forEach((file: any) => {
              fd.append('image_category', file);
            });
            mutateCreateCategory(fd);
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
                      CREATE CATEGORY
                    </h3>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Name Category</span>
                        </div>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Input Name Category"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500"
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
