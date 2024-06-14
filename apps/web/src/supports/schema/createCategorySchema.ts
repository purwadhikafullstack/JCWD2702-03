import * as Yup from 'yup';

export const ValidasiCreateCategory = Yup.object().shape({
  name: Yup.string().required('Name Product is Required'),
});
