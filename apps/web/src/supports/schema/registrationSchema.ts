import { first } from 'cypress/types/lodash';
import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  firstName: Yup.string().min(1, 'First Name must be at least 1 characters').max(20, 'First Name must be at most 20 characters').required('First Name is required!'),
  lastName: Yup.string().min(1, 'Last Name must be at least 1 characters').max(20, 'Last Name must be at most 20 characters').required('Last Name is required!'),
  email: Yup.string().email().required('Email is required!')
})