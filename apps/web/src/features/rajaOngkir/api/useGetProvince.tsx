'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetProvince = () => {
  const [province, setProvince]: any = useState([]);
  const onHandleGetProvince = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/province`);
      const data = await res.data.data.rajaongkir.results;
      // console.log(data);
      setProvince(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onHandleGetProvince();
  }, []);
  return {
    onHandleGetProvince,
    province,
  };
};
