'use client';
import { useUpdateUserProfile } from '@/features/user/hooks/useUpdateUser';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useGetUserProfileResult } from '@/features/user/hooks/useGetUserProfile';
export default function UpdateUser() {
  const { mutationUpdateUser } = useUpdateUserProfile();
  const [upload, setUpload]: any = useState([]);
  const { dataUser } = useGetUserProfileResult();

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
        if (file.size > 1000000) {
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
    <div className="pt-4 min-h-screen w-full flex items-center justify-center">
      {dataUser ? (
        <Formik
          initialValues={{
            fullname: dataUser?.userProfile?.fullname,
            birthDate: dataUser?.userProfile?.birthDate,
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
            mutationUpdateUser(fd);
            resetForm();
          }}
        >
          {({ dirty, isValid }) => {
            return (
              <>
                <Form>
                  <div className="flex flex-col justify-center px-5 border h-[70vh] rounded-lg">
                    <div className="text-center font-bold">
                      <p>UPDATE USER PROFILE</p>
                    </div>
                    <div className="">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Update Fullname</span>
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
                          <span className="label-text">Update Birth Date</span>
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
                      className="btn bg-[#28b293] text-white hover:bg-gray-800 w-full"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      ) : (
        <div> Loading...</div>
      )}
    </div>
  );
}
