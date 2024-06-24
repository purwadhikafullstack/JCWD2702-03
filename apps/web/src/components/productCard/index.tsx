import Image from 'next/image';
import Link from 'next/link';
export default function ProductCard({
  productId,
  name,
  price,
  category,
  image,
  stock,
}: any) {
  return (
    <div>
      <div className="card w-[20vw] bg-base-100 shadow-xl">
        <figure>
          <Image
            src={'http://localhost:8000/' + image}
            alt="Product"
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className="h-[40vh] w-full object-cover"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="hidden">{category}</h2>
          <Link href={`/shop/${productId}`}>
            <p className="font-semibold hover:text-softed whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </p>
          </Link>
          <p className="font-semibold text-2xl text-softed">
            {price.toLocaleString('ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </p>
          <div>
            <span className="font-semibold">Stock</span> :{' '}
            <span>
              {stock ? (
                stock.stock
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </span>
          </div>
          {stock ? (
            <div className="card-actions justify-end">
              <button className="btn bg-softed hover:bg-softed text-white w-full">
                Add Cart
              </button>
            </div>
          ) : (
            <div className="card-actions justify-end">
              <button
                disabled
                className="btn bg-softed hover:bg-softed text-white w-full"
              >
                Add Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
