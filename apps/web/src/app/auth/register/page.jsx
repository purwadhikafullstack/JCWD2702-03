'use client';
import { useAuthCreateUser } from '@/hooks/auth/useAuthCreateUser';
import { registrationSchema } from '@/support/schema/registrationSchema';
import { Form, Formik, Field, ErrorMessage } from 'formik';

export default function RegisterPage() {
  const { mutationCreateUser } = useAuthCreateUser();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        mutationCreateUser({
          email: values.email,
          password: values.password,
        });
      }}
    >
      <Form>
        <div className="flex min-h-screen flex items-center justify-center">
          <div className="w-[30vw] h-[60vh] border rounded-lg">
            <p className="text-center text-2xl font-semibold pt-4">
              Create Account
            </p>
            <div className="flex flex-col px-14">
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

              <div className="w-[50vh]">
                <label className="form-control w-[50vh]">
                  <div className="label pt-4">
                    <span className="label-text">Password</span>
                  </div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Type Your Password"
                    className="input input-bordered w-[50vh]"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-blue-500 w-[50vh] hover:bg-blue-700 text-white mt-10"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
