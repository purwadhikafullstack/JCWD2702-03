import Image from "next/image";
export default function CardHelper() {
  return (
    <div className="flex items-center gap-4">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src= '/ongkir.jpeg'
            alt="gambar"
            width={10000}
            height={10000}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gratis Ongkir</h2>
          <p>Belanja dengan gratis ongkos kirim untuk pembelian minimal Rp50.000 (Jabodetabek).</p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/ship.png"
            alt="gambar"
            width={10000}
            height={10000}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mau Barang Dikirim Hari Ini?</h2>
          <p>Pesanan sebelum jam 12:00 (Siang) akan mendapatkan prioritas kirim di hari kerja yang sama.</p>
        </div>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/help.jpeg"
            alt="gambar"
            width={10000}
            height={10000}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Butuh Bantuan?</h2>
          <p>Silahkan hubungi kami jika ada kendala atau pun pertanyaan saat belanja.</p>
        </div>
      </div>
    </div>
  );
}
