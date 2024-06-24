'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateProfile } from '@/features/user/hooks/useCreateUserProfile';

export default function ModalCreateProfile() {
  const [upload, setUpload]: any = useState([]);
  const { mutationCreateUserProfile }= useCreateProfile()

  const nav = useRouter();
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
      if (files.length > 1) throw { message: `Selected File More Than 1` };
      setUpload(files);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="btn bg-gray-800 text-white hover:bg-gray-800 w-[300px]"
      >
        Create Profile
      </label>
      <Formik
        initialValues={{
          fullname: '',
          birthDate: '',
        }}
        onSubmit={(values, { resetForm }) => {
          const fd = new FormData();
          fd.append(
            'data',
            JSON.stringify({
              fullname: values.fullname,
              birthDate: new Date(values.birthDate),
            }),
          );
          upload.forEach((file: any) => {
            fd.append('profile_images', file);
          });
          mutationCreateUserProfile(fd);
          resetForm();
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
                      CREATE USER PROFILE
                    </h3>
                    <div className="">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Fullname</span>
                        </div>
                        <Field
                          type="text"
                          name="fullname"
                          placeholder="Input Fullname"
                          className="input input-bordered"
                        />
                        {/* <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500"
                        /> */}
                      </label>
                    </div>
                    
                    <div className="">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Birth Date</span>
                        </div>
                        <Field
                          type="date"
                          name="birthDate"
                          placeholder="Input Your Birth Date"
                          className="input input-bordered"
                        />
                        {/* <ErrorMessage
                          name="price"
                          component="div"
                          className="text-red-500"
                        /> */}
                      </label>
                    </div>
                    
                    <fieldset className="w-full pb-4">
                      <label className="form-control ">
                        <div className="label">
                          <span className="label-text">
                            Upload Profile Image
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
                      type="submit"
                      disabled={!(dirty && isValid)}
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
