'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import Select from 'react-select';
import axios from 'axios';
import CostResult from './costResult'; // Ensure this is the correct import path
import { ResultData } from './type.d';
import { City, CityOption } from './type.d';
import DetailProductCheckout from './DetailProductCheckout';

const CostForm = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
  const [courier, setCourier] = useState('');
  const [result, setResult] = useState<ResultData | null>(null);
  const [totalProductCost, setTotalProductCost] = useState(0);
  const [selectedShippingCost, setSelectedShippingCost] = useState(0);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:8000/city');
        if (!response.ok) {
          throw new Error('Failed to fetch cities');
        }
        const data = await response.json();
        setCities(data.data.rajaongkir.results);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
    fetchCities();

    const fetchProductDetails = () => {
      const productDetails = JSON.parse(
        localStorage.getItem('selectedProductDetails') || '[]',
      );
      const totalCost = productDetails.reduce(
        (acc: number, product: any) =>
          acc + product.quantity * product.product.price,
        0,
      );
      setTotalProductCost(totalCost);
    };
    fetchProductDetails();
  }, []);

  const cityOptions: CityOption[] = cities.map((city) => ({
    value: city.city_id,
    label: city.city_name,
  }));

  const handleCityChange = (selectedOption: CityOption | null) => {
    setSelectedCity(selectedOption);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedCity) {
      alert('Please select a city');
      return;
    }

    const response = await fetch('http://localhost:8000/cost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        origin: '151',
        destination: selectedCity.value,
        weight: '10',
        courier,
      }),
    });

    const data = await response.json();
    setResult(data.data.rajaongkir);
  };

  const handlePayment = async () => {
    const orderId = `order-${Date.now()}`;
    const amount = totalProductCost + selectedShippingCost;

    try {
      const response = await axios.post(
        'http://localhost:8000/midtrans/create-payment',
        {
          amount,
          orderId,
        },
      );

      const paymentLink = response.data.payment_url;
      window.location.href = paymentLink;
    } catch (error) {
      console.error('Error creating payment link:', error);
      alert('Failed to create payment link');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <DetailProductCheckout />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label htmlFor="city" className="block mb-2">
            City:
          </label>
          <Select
            id="city"
            options={cityOptions}
            value={selectedCity}
            onChange={handleCityChange}
            placeholder="Search city..."
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>

        <div>
          <label htmlFor="courier" className="block mb-2">
            Courier:
          </label>
          <select
            id="courier"
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          >
            <option value="jne">JNE</option>
            <option value="tiki">TIKI</option>
            <option value="pos">POS</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Get Cost
        </button>
      </form>
      {result && (
        <CostResult
          result={result}
          totalProductCost={totalProductCost}
          setSelectedShippingCost={setSelectedShippingCost}
        />
      )}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Total Cost</h2>
        <p className="text-gray-700">
          Total Product Cost: Rp {totalProductCost.toLocaleString()}
        </p>
        <p className="text-gray-700">
          Shipping Cost: Rp {selectedShippingCost.toLocaleString()}
        </p>
        <p className="text-gray-700 font-semibold">
          Grand Total: Rp{' '}
          {(totalProductCost + selectedShippingCost).toLocaleString()}
        </p>
      </div>
      <button
        onClick={handlePayment}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CostForm;