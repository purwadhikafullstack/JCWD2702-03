'use client';
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useGetProductById } from '@/features/product/hooks/useGetProductById';
import { useUpdateProduct } from '@/features/product/hooks/useUpdateProduct';
import { ValidasiCreateProduct } from '@/supports/schema/createProductSchema';
import { useGetCategory } from '@/features/category/hooks/useGetCategory';
import { useRouter } from 'next/navigation';

export default function ModalUpdateProductPage(params: any) {
  const [upload, setUpload]: any = useState([]);
  const { data } = useGetProductById(params.params.productDetail);
  const { dataCategory }: any = useGetCategory();

  const nav = useRouter();
  const { updateProduct } = useUpdateProduct();
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
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold">Update Product</h1>
        <div className="divider w-full"></div>
        {data?.data?.data ? (
          <Formik
            initialValues={{
              name: data?.data?.data.name,
              price: data?.data?.data.price,
              description: data?.data?.data.description,
              categoryId: data?.data?.data.categoryId,
            }}
            validationSchema={ValidasiCreateProduct}
            onSubmit={(value, { resetForm }) => {
              const fd = new FormData();
              fd.append(
                'data',
                JSON.stringify({
                  name: value.name,
                  price: parseInt(value.price),
                  description: value.description,
                  categoryId: parseInt(value.categoryId),
                }),
              );
              upload.forEach((file: any) => {
                fd.append('product_images', file);
              });
              updateProduct({ productID: params.params.productDetail, fd: fd });
              resetForm();
            }}
          >
            {({ dirty, isValid }) => {
              return (
                <>
                  <Form>
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
                          component="select"
                          id="categoryId"
                          name="categoryId"
                          className="select select-bordered"
                        >
                          <option>Choose Category</option>
                          {dataCategory?.map((category: any, index: number) => {
                            return (
                              <option value={category.id} key={index}>
                                {category.name}
                              </option>
                            );
                          })}
                        </Field>
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
                          <span className="label-text">
                            Description Product
                          </span>
                        </div>
                        <Field
                          as="textarea"
                          type="text"
                          name="description"
                          placeholder="Input Product Description"
                          className="input input-bordered h-16"
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
                          <span className="label-text">
                            Upload Product Image
                          </span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) => onSetFile(event)}
                          multiple
                          placeholder="Upload Product Image"
                          className="px-8 py-7 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100"
                        />
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      onClick={() => {
                        nav.push('/admin/product');
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
