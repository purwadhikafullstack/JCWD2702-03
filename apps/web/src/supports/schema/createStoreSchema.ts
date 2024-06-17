import * as Yup from 'yup';

export const ValidasiCreateStore = Yup.object().shape({
  name: Yup.string().required('Name Store is Required'),
  province: Yup.string().required('Province is Required'),
  city: Yup.string().required('City is Required'),
  address: Yup.string().required('Address is Required'),
  zip_code: Yup.string().required('Zip Code is Required'),
  latitude: Yup.number().required('Latitude is Required'),
  longitude: Yup.number().required('Longitude is Required'),
});
