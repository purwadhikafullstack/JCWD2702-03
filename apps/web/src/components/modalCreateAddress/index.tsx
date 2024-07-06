'use client';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useGetProvince } from '@/features/rajaOngkir/api/useGetProvince';
import { useGetCity } from '@/features/rajaOngkir/api/useGetCity';
import { useState } from 'react';
import { useCreateAddress } from '@/features/user/hooks/useCreateAddress';
import { FaAddressBook } from 'react-icons/fa';
import axios from 'axios';

export default function ModalCreateAddress() {
  const { mutationCreateAddress } = useCreateAddress();
  const { province } = useGetProvince();
  const { city, onHandleGetCity } = useGetCity();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [getProvinceName, setProvinceName] = useState<string>('');

  const handleSearchAddress = async () => {
    const API_KEY = 'e4c27f3dadd545409f45a1104e583608';
    try {
      const result = await axios.get('https://api.opencagedata.com/geocode/v1/json?q=52.3877830%2C9.7334394&key=e4c27f3dadd545409f45a1104e583608')
    } catch (error) {
      console.log(error);
      
    }
  };

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
        <FaAddressBook /> Tambahkan Alamat
      </label>
      <Formik
        initialValues={{
          receipents: '',
          province: '',
          city: '',
          address: '',
          zip_code: '',
          phone_number: '',
        }}
        // validationSchema={ValidasiCreateStore}
        onSubmit={(values, { resetForm }) => {
          try {
            console.log(values);
            mutationCreateAddress({
              receipents: values.receipents,
              province: getProvinceName,
              city: values.city,
              address: values.address,
              zip_code: values.zip_code,
              phone_number: values.phone_number,
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
                      Buat Alamat
                    </h3>

                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Nama Penerima</span>
                        </div>
                        <Field
                          type="text"
                          name="receipents"
                          placeholder="Masukan Nama Penerima"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="receipents"
                          component="div"
                          className="text-red-500"
                        />
                      </label>
                    </div>
                    <div className="pb-5">
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Provinsi</span>
                        </div>
                        <Field
                          component="select"
                          value={selectedCity}
                          onChange={handleCity}
                          id="province"
                          name="province"
                          className="select select-bordered"
                        >
                          <option>Pilih Provinsi</option>
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
                          <span className="label-text">Kota</span>
                        </div>
                        <Field
                          component="select"
                          id="city"
                          name="city"
                          className="select select-bordered"
                        >
                          <option>Pilih Kota</option>
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
                          <span className="label-text">Detail Alamat</span>
                        </div>
                        <Field
                          type="text"
                          name="address"
                          placeholder="Masukan Detail Alamat"
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
                          <span className="label-text">Kode Pos</span>
                        </div>
                        <Field
                          type="text"
                          name="zip_code"
                          placeholder="Masukan Kode Pos"
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
                          <span className="label-text">Nomor Telfon</span>
                        </div>
                        <Field
                          type="text"
                          name="phone_number"
                          placeholder="Masukan Nomor Telfon"
                          className="input input-bordered"
                        />
                        <ErrorMessage
                          name="phone_number"
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
