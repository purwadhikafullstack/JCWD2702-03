'use client';
import { useAuthPassword } from '@/features/auth/hooks/useAuthPassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { passwordSchema } from '@/supports/schema/passwordSchema';

export default function SetPasswordPage(params) {
  const { mutatePassword } = useAuthPassword();

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      validationSchema={passwordSchema}
      onSubmit={(values) => {
        mutatePassword({
          accesstoken: params.params.tokenVerify,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
      }}
    >
      {({ dirty, isValid }) => {
        return (
          <Form>
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 border">
                <h1 className="text-2xl font-bold text-center">
                  Verify Your Account!
                </h1>
                <div className="space-y-6">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-600">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Input Your Password"
                      className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 border"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-600">
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Input Your Password"
                      className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 border"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600 hover:bg-gray-200 hover:text-black"
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
