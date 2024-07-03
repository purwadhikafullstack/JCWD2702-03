import ModalCreateAddress from '@/components/modalCreateAddress';

export default function AddressPage() {
  return (
    <div className="w-[70vw] border">
      <div className='px-10 py-4'>
        <ModalCreateAddress />
      </div>

      <div className='px-10'>
        <p>
          Daftar Alamat
        </p>
      </div>
    </div>
  );
}
