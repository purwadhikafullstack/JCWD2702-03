'use client';
import {
  useAuthCreateUser,
  useAuthCreateUserWithGoogle,
} from '@/features/auth/hooks/useAuthCreateUser';
import { registrationSchema } from '@/supports/schema/registrationSchema';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

export default function RegisterPage() {
  const { mutationCreateUserWithGoogle } = useAuthCreateUserWithGoogle();
  const { mutationCreateUser } = useAuthCreateUser();

  const signUpWithGoogle = async () => {
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        mutationCreateUserWithGoogle({
          email: result.user.email,
          fullname: result.user.displayName,
          uid: result.user.uid,
        });
      }
    });
  };
  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
      }}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        mutationCreateUser({
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
        });
      }}
    >
      {({ dirty, isValid }) => {
        return (
          <Form>
            <div className="flex min-h-screen items-center justify-center">
              <div className="w-[30vw] h-[90vh] border rounded-lg">
                <p className="text-center text-2xl font-semibold py-4">
                  Registrasi Akun
                </p>
                <div className="flex flex-col px-14">
                  <div className="w-[50vh]">
                    <label className="form-control w-[50vh]">
                      <div className="label pt-4">
                        <span className="label-text">Nama Depan</span>
                      </div>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Type Your Firstname"
                        className="input input-bordered w-[50vh]"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500"
                      />
                    </label>
                  </div>

                  <div className="w-[50vh]">
                    <label className="form-control w-[50vh]">
                      <div className="label pt-4">
                        <span className="label-text">Nama Belakang</span>
                      </div>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Type Your Email"
                        className="input input-bordered w-[50vh]"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500"
                      />
                    </label>
                  </div>

                  <div className="w-[50vh]">
                    <label className="form-control w-[50vh]">
                      <div className="label pt-4">
                        <span className="label-text">Email </span>
                      </div>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Type Your Email"
                        className="input input-bordered w-[50vh]"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </label>
                  </div>
                  <p className="pt-2">
                    {' '}
                    Sudah Punya Akun?{' '}
                    <Link href="/auth/login" className="text-blue-600">
                      {' '}
                      Masuk{' '}
                    </Link>{' '}
                  </p>
                  <Link href="/auth/resend-email">
                    <p className="underline pt-2">
                      Kirim Ulang Email Verifikasi
                    </p>
                  </Link>
                  <button
                    type="submit"
                    className="btn bg-blue-500 w-[50vh] hover:bg-blue-700 text-white mt-6"
                    disabled={!(dirty && isValid)}
                  >
                    Submit
                  </button>
                  <div className="flex justify-center space-x-4 pt-4">
                    <button
                      type="button"
                      className="flex justify-center block w-[50vh] p-3 rounded-lg text-gray-50 bg-black hover:bg-gray-200 hover:text-black"
                      onClick={signUpWithGoogle}
                    >
                      Daftar Dengan{' '}
                      <FcGoogle className="w-5 h-5 fill-current ml-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
