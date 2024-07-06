'use client';
import { useUpdateStore } from '@/features/store/hooks/useUpdateStore';
import { useGetStoreById } from '@/features/store/hooks/useGetStoreById';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidasiCreateStore } from '@/supports/schema/createStoreSchema';
import { useRouter } from 'next/navigation';
import { useGetProvince } from '@/features/rajaOngkir/api/useGetProvince';
import { useGetCity } from '@/features/rajaOngkir/api/useGetCity';
import { useState } from 'react';

export default function UpdateStorePage(params: any) {
  const { data } = useGetStoreById(params.params.storeId);
  const { updateStore } = useUpdateStore();
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
  const nav = useRouter();
  return (
    <div className="min-h-screen max-h-[50vh] overflow-y-auto">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">Update Store</h1>
        {data?.data?.data ? (
          <Formik
            initialValues={{
              name: data?.data?.data.name,
              province: data?.data?.data.province,
              city: data?.data?.data.city,
              address: data?.data?.data.address,
              zip_code: data?.data?.data.zip_code,
              latitude: data?.data?.data.latitude,
              longitude: data?.data?.data.longitude,
            }}
            validationSchema={ValidasiCreateStore}
            onSubmit={(value, { resetForm }) => {
              try {
                updateStore({
                  storeId: params.params.storeId,
                  name: value.name,
                  province: getProvinceName,
                  city: value.city,
                  address: value.address,
                  zip_code: value.zip_code,
                  latitude: parseFloat(value.latitude),
                  longitude: parseFloat(value.longitude),
                });
                resetForm();
              } catch (error) {
                console.log('Error', error);
              }
            }}
          >
            {({ dirty, isValid }) => {
              return (
                <>
                  <Form>
                    <div className="">
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
                    <div className="">
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
                    <div className="">
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
                    <div className="">
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
                      type="submit"
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to save the changes?',
                          )
                        ) {
                          nav.push('/admin/store');
                        }
                      }}
                      disabled={!(dirty && isValid)}
                      className="btn bg-gray-800 text-white hover:bg-gray-800 w-full"
                    >
                      Save Change
                    </button>
                  </Form>
                </>
              );
            }}
          </Formik>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
}
