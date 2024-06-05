'use client';
import { ValidasiCreateProduct } from '@/supports/createProductSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCreateProductMutate } from '@/app/admin/product/hooks/useCreateProductMutate';
import { useState } from 'react';

export default function ModalCreateProduct() {
  const [upload, setUplad]: any = useState([]);
  const { mutateCreateProduct } = useCreateProductMutate();

  const onSetFile = (event: any) => {
    try {
      const acceptedFormat = ['jpg,', 'jpeg', 'webp', 'png', 'gif'];
      const files = [...event.target.files];
      files.forEach((file) => {
        if (
          !acceptedFormat.includes(
            file.name.split('.')[file.name.split('.').length - 1],
          )
        ) {
          throw { message: `${file.name} Format Not Acceptable` };
        }
        if (file.size > 1000000) {
          throw { message: `${file.name} is too Large!` };
        }
      });
      if (files.length > 3) throw { message: `Selected File More Than 3` };
      setUplad(files);
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
        Create Product
      </label>
      <Formik
        initialValues={{
          name: '',
          price: '',
          description: '',
          categoryId: '',
        }}
        validationSchema={ValidasiCreateProduct}
        onSubmit={async (values, { resetForm }) => {
          try {
            const fd = new FormData();
            fd.append(
              'data',
              JSON.stringify({
                name: values.name,
                price: parseInt(values.price),
                description: values.description,
                categoryId: parseInt(values.categoryId),
              }),
            );
            upload.forEach((file: any) => {
              fd.append('product_images', file);
            });
            await mutateCreateProduct(fd);
            resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box w-[50vw]">
              <h3 className="text-lg font-semibold text-center">
                CREATE PRODUCT
              </h3>
              <div className="">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Name Product</span>
                  </div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Input Name Product"
                    className="input input-bordered"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Category Product</span>
                  </div>
                  <Field
                    type="text"
                    id="categoryId"
                    name="categoryId"
                    className="input input-bordered"
                  />
                  <ErrorMessage
                    name="categoryId"
                    component="div"
                    className="text-red-500"
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Price Product</span>
                  </div>
                  <Field
                    type="number"
                    name="price"
                    placeholder="Input Product Price"
                    className="input input-bordered"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500"
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Description Product</span>
                  </div>
                  <Field
                    as="textarea"
                    type="text"
                    name="description"
                    placeholder="Input Product Description"
                    className="input input-bordered h-24"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500"
                  />
                </label>
              </div>
              <fieldset className="w-full pb-4">
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Upload Product Image</span>
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
              <button className="btn bg-gray-800 text-white hover:bg-gray-800 w-full">
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
