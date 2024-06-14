'use client';
import { useAuthLogin } from '@/features/auth/hooks/useAuthLogin';
import { loginSchema } from '@/supports/schema/loginSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { useAuthCreateUserWithGoogle } from '../../../features/auth/hooks/useAuthCreateUser';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

export default function LoginPage() {
  const { mutationAuthLogin } = useAuthLogin();
  const { mutationCreateUserWithGoogle} = useAuthCreateUserWithGoogle();

  const signUpWithGoogle = async () => {
    signInWithPopup(auth, provider).then(async (result) => {;
      
      if(result.user){
        mutationCreateUserWithGoogle({
          email: result.user.email as any,
          fullname: result.user.displayName as any,
          uid: result.user.uid
        })}
    })
  }
  
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        
        mutationAuthLogin({
          email: values.email,
          password: values.password,
        });
      }}
    >

      <Form>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 border">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Input Your Email"
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600 border"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-600">
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
                <div className="flex justify-end text-xs text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-black hover:bg-gray-200 hover:text-black"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
            <div
                onClick={signUpWithGoogle}
                className="flex justify-center block w-full p-3 rounded-sm text-gray-50 bg-black hover:bg-gray-200 hover:text-black"
              >
                Sign in with <FcGoogle className="w-5 h-5 fill-current ml-4"/>
              </div>
            </div>
            <p className="text-xs text-center sm:px-6 text-gray-600">
              Don't have an account?
              <Link href={'/auth/register'}>
                <p className="underline text-gray-800">Sign up</p>
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
