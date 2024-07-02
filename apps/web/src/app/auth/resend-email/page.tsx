'use client';
import { useAuthCreateResendEmail } from '@/features/auth/hooks/useAuthCreateResendEmail';
import { Formik, Form, Field } from 'formik';

export default function ResendEmailPage() {
  const { mutationResendEmail } = useAuthCreateResendEmail();

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => mutationResendEmail({ email: values.email })}
    >
      <Form>
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-[30vw] border rounded-lg flex flex-col justify-center py-6">
            <p className="text-center text-2xl font-semibold">
              Resend Email
            </p>
            <div className="w-[50vh] flex flex-col px-14">
              <label className="form-control w-[50vh] justify-center">
                <div className="label pt-4">
                  <span className="label-text">Email </span>
                </div>
                <Field
                  type="text"
                  name="email"
                  placeholder="Type Your Email"
                  className="input input-bordered w-[50vh]"
                />
              </label>
              <button
                type="submit"
                className="btn bg-black w-[50vh] hover:bg-grey-700 text-white mt-6"
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
