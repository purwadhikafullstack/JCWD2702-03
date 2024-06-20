import * as yup from 'yup';

export const ValidasiCreateStock = yup.object().shape({
  stock: yup.number().required('Stock is Required'),
  productId: yup.number().required('Product is Required'),
  storeId: yup.number().required('Store is Required'),
});
