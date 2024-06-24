'use client';
import { useCreateCategoryMutate } from '@/features/category/hooks/useCreateCategoryMutate';
import { Formik, Form, Field } from 'formik';

export default function ModalCreateCategory() {
  const { mutateCreateCategory } = useCreateCategoryMutate();
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
        onSubmit={(values, { resetForm }) => {
          mutateCreateCategory({
            name: values.name,
          });
          resetForm();
        }}
      >
        <Form>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box w-[50vw]">
              <h3 className="text-lg font-semibold text-center">
                CREATE PRODUCT
              </h3>
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
      </Formik>
    </div>
  );
}
