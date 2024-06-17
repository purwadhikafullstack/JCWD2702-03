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
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-3xl font-semibold pb-5">Detail Store</h1>
        <h1 className="text-xl font-semibold pb-5">Name Store : </h1>
        <span>{name}</span>
        <h1 className="text-xl font-semibold pb-5">Province : </h1>
        <span>{province}</span>
        <h1 className="text-xl font-semibold pb-5">City : </h1>
        <span>{city}</span>
        <h1 className="text-xl font-semibold pb-5">Address : </h1>
        <span>{address}</span>
        <h1 className="text-xl font-semibold pb-5">Zip Code : </h1>
        <span>{zip_code}</span>
        <h1 className="text-xl font-semibold pb-5">Latitude : </h1>
        <span>{latitude}</span>
        <h1 className="text-xl font-semibold pb-5">Longitude : </h1>
        <span>{longitude}</span>
      </div>
    </div>
  );
}
