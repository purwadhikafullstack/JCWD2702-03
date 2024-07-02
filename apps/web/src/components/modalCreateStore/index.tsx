'use client';
import { useCreateStore } from '@/features/store/hooks/useCreateStore';
import { ValidasiCreateStore } from '@/supports/schema/createStoreSchema';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useGetProvince } from '@/features/rajaOngkir/api/useGetProvince';
import { useGetCity } from '@/features/rajaOngkir/api/useGetCity';
import { useState } from 'react';
export default function ModalCreateStore({ page }: any) {
  const { createStore } = useCreateStore(page);
  const { province } = useGetProvince();
  const { city, onHandleGetCity } = useGetCity();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [getProvinceName, setProvinceName] = useState<string>('');

  const handleCity = (e: any) => {
    const provinceId = e.target.value;
    const provinceName = province.find(
      (provinceName: any) => provinceName.province_id === provinceId,
    ).province;
    setProvinceName(provinceName);
    setSelectedCity(provinceId);
    if (provinceId) {
      onHandleGetCity(provinceId);
    }
  };
  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="btn bg-gray-800 text-white hover:bg-gray-800"
      >
        Create Store
      </label>
      <Formik
        initialValues={{
          name: '',
          province: '',
          city: '',
          address: '',
          zip_code: '',
          latitude: '',
          longitude: '',
        }}
        // validationSchema={ValidasiCreateStore}
        onSubmit={(values, { resetForm }) => {
          try {
            console.log(values);
            createStore({
              name: values.name,
              province: getProvinceName,
              city: values.city,
              address: values.address,
              zip_code: values.zip_code,
              latitude: parseFloat(values.latitude),
              longitude: parseFloat(values.longitude),
            });
            // resetForm();
          } catch (error) {
            console.log('Error', error);
          }
        }}
      >
        {({ dirty, isValid }) => {
          return (
            <>
              <Form>
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box w-[50vw]">
                    <h3 className="text-lg font-semibold text-center">
                      CREATE STORE
                    </h3>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Name Store</span>
                        </div>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Input Name Store"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Province</span>
                        </div>
                        <Field
                          component="select"
                          value={selectedCity}
                          onChange={handleCity}
                          id="province"
                          name="province"
                          className="select select-bordered"
                        >
                          <option>Select Province</option>
                          {province?.map((province: any, index: number) => {
                            return (
                              <option key={index} value={province.province_id}>
                                {province.province}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="province"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">City</span>
                        </div>
                        <Field
                          component="select"
                          id="city"
                          name="city"
                          className="select select-bordered"
                        >
                          <option>Select City</option>
                          {city?.map((city: any, index: number) => {
                            return (
                              <option key={index}>{city.city_name}</option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Address</span>
                        </div>
                        <Field
                          type="text"
                          name="address"
                          placeholder="Input Address Store"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Zip Code</span>
                        </div>
                        <Field
                          type="text"
                          name="zip_code"
                          placeholder="Input Zip Code Store"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="zip_code"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Latitude</span>
                        </div>
                        <Field
                          type="text"
                          name="latitude"
                          placeholder="Input Latitude Store"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="latitude"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Longitude</span>
                        </div>
                        <Field
                          type="text"
                          name="longitude"
                          placeholder="Input Name Store"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="longitude"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <button
                      disabled={!(dirty && isValid)}
                      type="submit"
                      className="btn bg-gray-800 text-white hover:bg-gray-800 w-full"
                    >
                      Submit
                    </button>
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
