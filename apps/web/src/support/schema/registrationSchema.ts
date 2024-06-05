import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required!'),
  password: Yup.string().required('Password is required!'),
})