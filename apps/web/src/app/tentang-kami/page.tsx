import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Image
          src="/veg.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-[100vw] h-[50vh] object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center w-[100vw] h-[50vh]">
        <p className="text-5xl font-bold text-white">VOC MART</p>
        <p className="text-3xl text-white">Pilihan Sehat, Bebas Repot</p>
      </div>
      <div className="flex flex-col items-center h-[50vh] bg-gray-200">
        <p className="pt-20 text-3xl text-[#28b293] font-bold">
          {' '}
          Tentang VOC Mart
        </p>
        <p className="pt-10 text-center px-52 text-lg">
          Kami berbasis supermarket online yang hadir di tengah masyarakat
          Indonesia. VOC Mart adalah solusi tepat dan modern dalam berbelanja.
          VOC Mart hadir untuk memudahkan hidup anda, dengan ribuan pilihan
          produk rumah tangga dan pengiriman gratis yang kami kirim ke rumah
          anda.
        </p>
      </div>
      <div className="flex flex-col items-center h-[70vh]">
        <p className="pt-10 text-3xl text-[#28b293] font-bold">
          {' '}
          Mengapa VOC Mart?
        </p>
        <div className="flex gap-8">
          <div className="h-75 w-80 mt-10">
            <div className="flex justify-center">
              <Image
                src={'/hemat.png'}
                alt="logo"
                className="w-[125px]"
                width={1000}
                height={1000}
              />
            </div>

            <div className="px-10">
              <h1 className="font-bold text-lg py-2 text-center text-[#28b293]">
                Hemat Biaya
              </h1>
              <p className="text-sm pt-2 text-center">
                {' '}
                Dengan harga yang bersaing dan layanan Gratis Ongkos Kirim, maka
                sudah tidak ada lagi alasan untuk tidak belanja di VOC Mart.
              </p>
            </div>
          </div>

          <div className="h-75 w-80 mt-10">
            <div className="flex justify-center">
              <Image
                src={'/free.png'}
                alt="logo"
                className="w-[125px]"
                width={1000}
                height={1000}
              />
            </div>

            <div className="px-10">
              <h1 className="font-bold text-lg pt-4 text-center text-[#28b293]">
                Barang Diantar Kerumah Anda
              </h1>
              <p className="text-sm pt-2 text-center">
                {' '}
                Hari gini masih antri berbelanja di supermarket? Solusi tepat
                belanja bulanan melalui website VOC Mart. Anda santai di rumah,
                barang kami antar.
              </p>
            </div>
          </div>

          <div className="h-75 w-80 mt-10">
            <div className="flex justify-center">
              <Image
                src={'/ongkir.png'}
                alt="logo"
                className="w-[125px]"
                width={1000}
                height={1000}
              />
            </div>

            <div className="px-10">
              <h1 className="font-bold text-lg pt-4 text-center text-[#28b293]">
                Gratis Ongkos Kirim
              </h1>
              <p className="text-sm pt-2 text-center">
                {' '}
                Nikmati layanan gratis ongkos kirim dengan minimum pembelian
                Rp50.000 (Area Jabodetabek)
              </p>
            </div>
          </div>

          <div className="h-75 w-80 mt-10">
            <div className="flex justify-center">
              <Image
                src={'/pay.png'}
                alt="logo"
                className="w-[125px]"
                width={1000}
                height={1000}
              />
            </div>

            <div className="px-10">
              <h1 className="font-bold text-lg pt-4 text-center text-[#28b293]">
                Tidak Ada Biaya Tambahan
              </h1>
              <p className="text-sm pt-2 text-center">
                {' '}
                Semua produk bebas dari biaya tambahan apapun
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 min-h-screen">
        <div>
          <Image
            src={'/fm.jpg'}
            alt="logo"
            className="w-[100vw] h-[100vh] object-cover"
            width={10000}
            height={10000}
          />
        </div>
        <div className="bg-gray-200 flex flex-col justify-center items-center px-10">
          <p className="text-3xl text-[#28b293] font-bold"> VISI KAMI</p>
          <p className="text-center text-lg pt-10">
            Menjadi platform bahan makanan online terkemuka yang menyediakan
            produk segar, berkualitas tinggi, dan layanan yang luar biasa,
            membuat belanja sehari-hari menjadi nyaman dan menyenangkan bagi
            semua orang.
          </p>
          <p className="text-3xl text-[#28b293] font-bold pt-10"> MISI KAMI</p>
          <p className="text-center text-lg pt-10">
            Misi kami adalah untuk memberikan bahan makanan segar dan
            berkualitas tinggi yang bersumber dari pemasok tepercaya dengan
            layanan pelanggan yang luar biasa. Kami memberikan pengalaman
            berbelanja yang lancar dengan platform yang mudah digunakan dan
            pengiriman yang cepat dan dapat diandalkan. Kami mempromosikan
            keberlanjutan dengan bermitra dengan pemasok yang ramah lingkungan
            dan mendukung komunitas lokal. Kami terus berinovasi dalam platform
            kami untuk memenuhi kebutuhan pelanggan yang terus berkembang.
          </p>
        </div>
      </div>
    </div>
  );
}
