'use client';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StoreDetailAdmin({
  storeid,
  name,
  province,
  city,
  address,
  zip_code,
  latitude,
  longitude,
}: any) {
  const markerIcon = Leaflet.divIcon({
    html: '<svg width="40" height="40" viewBox="0 0 121 193" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M52.799 1.08802C45 2.12602 34.212 5.95702 28.5 9.71602C22.547 13.635 13.443 22.635 9.99002 28.016C2.47702 39.723 -1.17498 55.748 0.789019 68.384C2.24702 77.762 4.39502 84.139 8.34902 90.833C13.073 98.829 15.767 104.322 21.186 117C23.89 123.325 26.708 129.85 27.449 131.5C28.19 133.15 33.583 145.525 39.434 159C52.75 189.668 53.04 190.235 56.166 191.743C60.682 193.921 64.397 191.777 67.529 185.182C69.83 180.338 87.756 141.476 95.752 124C102.209 109.887 108.274 97.943 111.995 92.015C133.257 58.137 114.501 12.19 75.5 2.61102C66.908 0.501017 60.461 0.0680161 52.799 1.08802ZM72.118 38.793C90.38 48.333 90.032 73.428 71.5 83.308C65.886 86.301 55.104 86.287 49.405 83.279C44.583 80.734 39.338 75.053 37.295 70.163C35.253 65.277 35.493 55.928 37.793 50.762C43.667 37.566 59.32 32.107 72.118 38.793Z" fill="black"/></svg>',
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    className: 'marker-icon',
  });
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold">Detail Store</h1>
        <div className="flex pt-10 gap-24">
          <div>
            <div className="pt-10">
              <span className="font-semibold text-xl">Name Store</span> :{' '}
              <span>{name}</span>
            </div>
            <div className="py-5">
              <span className="font-semibold text-xl">Province</span> :{' '}
              <span>{province}</span>
            </div>
            <div>
              <span className="font-semibold text-xl">City</span> :{' '}
              <span>{city}</span>
            </div>
            <div className="py-5">
              <span className="font-semibold text-xl">Address</span> :{' '}
              <span>{address}</span>
            </div>
            <div>
              <span className="font-semibold text-xl">Zip Code</span> :{' '}
              <span>{zip_code}</span>
            </div>
            <div className="py-5">
              <span className="font-semibold text-xl">Latitude</span> :{' '}
              <span>{latitude}</span>
            </div>
            <div>
              <span className="font-semibold text-xl">Longitude</span> :{' '}
              <span>{longitude}</span>
            </div>
          </div>
          <div className="h-[500px] w-[100%]">
            <MapContainer
              center={[latitude, longitude]}
              zoom={16}
              scrollWheelZoom={false}
              className="h-[500px] w-[100%]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]} icon={markerIcon}>
                <Popup>{name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
