export interface Cost {
    value: number;
    etd: string;
    note: string;
  }
  export interface CityOption {
    value: string;
    label: string;
  }
  
  export interface CostDetail {
    service: string;
    description: string;
    cost: Cost[];
  }
  
  export interface Result {
    code: string;
    name: string;
    costs: CostDetail[];
  }
  
  export interface OriginDetails {
    city_id: string;
    province_id: string;
    province: string;
    type: string;
    city_name: string;
    postal_code: string;
  }
  
  export interface DestinationDetails {
    city_id: string;
    province_id: string;
    province: string;
    type: string;
    city_name: string;
    postal_code: string;
  }
  export interface City {
    city_id: string;
    city_name: string;
  }
  export interface ResultData {
    query: {
      origin: string;
      destination: string;
      weight: number;
      courier: string;
    };
    status: {
      code: number;
      description: string;
    };
    origin_details: OriginDetails;
    destination_details: DestinationDetails;
    results: Result[];
  }