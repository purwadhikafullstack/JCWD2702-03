'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface City {
  city_id: string;
  city_name: string;
}

export const useGetCity = () => {
  const [city, setCity] = useState<City[]>([]);
  const onHandleGetCity = async (provinceId: string) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/city?province=${provinceId}`,
      );
      const data = await res.data.data.rajaongkir.results;
      //   console.log(data);
      setCity(data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    onHandleGetCity,
    city,
  };
};
