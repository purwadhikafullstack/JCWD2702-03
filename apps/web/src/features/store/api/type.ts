export interface ICreateStoreMutation {
  name: string;
  province: string;
  city: string;
  address: string;
  zip_code: string;
  latitude?: number;
  longitude?: number;
}
