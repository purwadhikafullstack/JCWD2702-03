'use client';
import { useAuthCreateUser } from '@/features/auth/hooks/useAuthCreateUser';
import { registrationSchema } from '@/supports/schema/registrationSchema';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Link from 'next/link';

export default function RegisterPage() {
  const { mutationCreateUser } = useAuthCreateUser();
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
            <div className="flex min-h-screen flex items-center justify-center">
              <div className="w-[30vw] h-[60vh] border rounded-lg">
                <p className="text-center text-2xl font-semibold py-4">
                  Register Account
                </p>
                <div className="flex flex-col px-14">
                  <div className="w-[50vh]">
                    <label className="form-control w-[50vh]">
                      <div className="label pt-4">
                        <span className="label-text">Firstname </span>
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
                        <span className="label-text">Lastname </span>
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
                    Already Have Account?{' '}
                    <Link href="/auth/login" className="text-blue-600">
                      {' '}
                      Login{' '}
                    </Link>{' '}
                  </p>
                  <button
                    type="submit"
                    className="btn bg-blue-500 w-[50vh] hover:bg-blue-700 text-white mt-10"
                    disabled={!(dirty && isValid)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
