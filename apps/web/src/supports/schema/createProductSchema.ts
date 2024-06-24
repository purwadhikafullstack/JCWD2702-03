import * as Yup from 'yup';

export const ValidasiCreateProduct = Yup.object().shape({
  name: Yup.string().required('Name Product is Required'),
  price: Yup.number().required('Price is Required'),
  description: Yup.string().required('Description is Required'),
  categoryId: Yup.string().required('Category is Required'),
});
