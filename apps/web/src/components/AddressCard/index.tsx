import { useDeleteAddress } from '@/features/user/hooks/useDeleteAddress';
import { useSetMainAddress } from '@/features/user/hooks/useSetMainAddress';
import { FaCheck } from 'react-icons/fa';

export interface AddressCardProps {
  addressId: number;
  receipents: string;
  province: string;
  city: string;
  address: string;
  zip_code: string;
  phone_number: string;
  fn?: () => void;
  status?: string;
}
export default function AddressCard(data: AddressCardProps) {
  const { deleteAddress } = useDeleteAddress();
  const { setMainAddress } = useSetMainAddress();
  return (
    <div
      className={`card bg-base-100 w-[50vw] shadow-xl ${data.status == 'TRUE' ? 'bg-green-100' : ''}`}
    >
      <div className="card-body">
        <div className='flex justify-between'>
          <h2 className="card-title">{data.receipents}</h2>
        </div>
        <p>{data.province}</p>
        <p>{data.city}</p>
        <p>{data.address}</p>
        <p>{data.zip_code}</p>
        <p>{data.phone_number}</p>
        <div className="card-actions justify-end">
          {data.status == 'TRUE' ? null : (
            <button
              onClick={() => setMainAddress({ id: data.addressId })}
              className="btn btn-primary bg-green-500 hover:bg-gray-500 border-0 text-white"
            >
              Pilih Alamat
            </button>
          )}

          <button
            onClick={() => deleteAddress({ id: data.addressId })}
            className="btn btn-primary bg-red-500 hover:bg-gray-500 border-0 text-white"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
