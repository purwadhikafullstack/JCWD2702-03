import React, { useState } from 'react';
import { ResultData, CostDetail } from './type';

const ResultCard: React.FC<
  CostDetail & {
    courierName: string;
    onSelect: () => void;
    isSelected: boolean;
  }
> = ({ service, description, cost, courierName, onSelect, isSelected }) => {
  const { value, etd } = cost[0];
  return (
    <div
      className={`border rounded-md p-4 mb-4 transition hover:scale-105 cursor-pointer ${
        isSelected
          ? 'border-blue-500 bg-blue-100'
          : 'border-gray-300 hover:bg-gray-100'
      }`}
      onClick={onSelect}
    >
      <h4 className="text-lg font-semibold mb-2">
        {courierName} - {service}
      </h4>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-700 font-semibold mb-2">
        Cost: Rp {value.toLocaleString()}
      </p>
      <p className="text-gray-700 font-semibold">
        Estimated Delivery Time: {etd} days
      </p>
    </div>
  );
};

const CostResult: React.FC<{
  result: ResultData;
  totalProductCost: number;
  setSelectedShippingCost: (cost: number) => void;
}> = ({ result, totalProductCost, setSelectedShippingCost }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const { origin_details, destination_details, results } = result;

  const handleSelectShipping = (cost: number, service: string) => {
    setSelectedShippingCost(cost);
    setSelectedService(service);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
        <p className="text-gray-700">
          From: {origin_details.city_name}, {origin_details.province}
        </p>
        <p className="text-gray-700">
          To: {destination_details.city_name}, {destination_details.province}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
        {results.map((result, index) =>
          result.costs.map((costDetail, i) => (
            <ResultCard
              key={`${index}-${i}`}
              courierName={result.name}
              service={costDetail.service}
              description={costDetail.description}
              cost={costDetail.cost}
              onSelect={() =>
                handleSelectShipping(
                  costDetail.cost[0].value,
                  costDetail.service,
                )
              }
              isSelected={selectedService === costDetail.service}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default CostResult;