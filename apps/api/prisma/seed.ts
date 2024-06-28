import { PrismaClient } from '@prisma/client';
import { HashPassword } from '../src/helpers/Hashing';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$transaction(async (tx) => {
    await tx.userRole.createMany({
      data: [
        {
          role: 'Super Admin',
        },
        {
          role: 'Store Admin',
        },
        {
          role: 'User',
        },
      ],
    });
    await tx.user.createMany({
      data: [
        {
          firstName: 'Super Admin',
          verify: 'VERFIY',
          email: 'superadmin@me.com',
          roleId: 1,
          password: await HashPassword({ password: 'superadmin' }),
        },
        {
          firstName: 'Store Admin',
          verify: 'VERFIY',
          email: 'storeadmin@me.com',
          roleId: 2,
          password: await HashPassword({ password: 'admin' }),
        },
        {
          firstName: 'Mustofa',
          verify: 'VERFIY',
          email: 'mustofawho12@gmail.com',
          password: await HashPassword({ password: '123456' }),
          googleAuth: 'TRUE',
        },
      ],
    });

    await tx.productCategory.createMany({
      data: [
        {
          name: 'Rempah - Rempah',
        },
        {
          name: 'Makanan dan Minuman',
        },
        {
          name: 'Kebutuhan Dapur',
        },
        {
          name: 'Lainnya',
        },
      ],
    });

    await tx.productCategoryImage.createMany({
      data: [
        {
          productCategoryId: 1,
          categoryUrl: 'src/public/image_category/image/icon1.png',
        },
        {
          productCategoryId: 2,
          categoryUrl: 'src/public/image_category/image/icon2.png',
        },
        {
          productCategoryId: 3,
          categoryUrl: 'src/public/image_category/image/icon4.png',
        },
        {
          productCategoryId: 4,
          categoryUrl: 'src/public/image_category/image/icon5.png',
        },
      ],
    });
    await tx.product.createMany({
      data: [
        {
          name: 'Dua Belibis S/Terasi BTL 170 Gr',
          price: 17200,
          description:
            'Dua Belibis hadir di Indonesia sejak tahun 1970 dan hingga kini dikenal sebagai salah satu merek sambal terbaik di Indonesia. Dua Belibis yang berada di bawah naungan PT Anggana Catur Prima merupakan perusahaan Fast Moving Consumer Goods (FMCG) yang masuk dalam tiga besar di Indonesia dalam kategori saus sambal kemasan. Tidak hanya sambal, saat ini dua belibis memiliki berbagai variasi yang dapat dipilih sesuai dengan kebutuhan Anda. Salah satu produk dari dua belibis yang terkenal adalah Dua Belibis Sambal Terasi. Produk ini dibuat dari cabe asli pilihan dan terasi berkualitas, diolah dengan teknologi modern dan bahan-bahan premium lainnya. Mempunyai cita rasa yang khas dan gurih, sehingga membuat momen makan menjadi lebih istimewa.',
          categoryId: 3,
        },
        {
          name: 'DUA BELIBIS SAUS CABE 135 ML',
          price: 10000,
          description:
            'Sambal Dua Belibis adalah saus sambal yang terbuat dari cabai asli pilihan dengan tambahan rempah khas Indonesia menjadikan cita rasa sambal yang nikmat. Telah diproses secara higienis sehingga aman untuk dikonsumsi. Ideal sebagai penambah selera makan Anda.',
          categoryId: 3,
        },
        {
          name: 'Dua Belibis Saus Cabe Sacchet 10 Gr',
          price: 12700,
          description:
            'DUA BELIBIS Saus Sambal merupakan saus sambal yang terbuat dari cabai segar pilihan dan rempah-rempah berkualitas lainnya sehingga menghasilkan sambal yang enak dan gurih serta diolah secara higienis yang akan menjaga keaslian rasanya. Sangat cocok sebagai pelengkap setiap hidangan yang akan memberikan rasa lebih istimewa.',
          categoryId: 3,
        },
        {
          name: 'Sasa Sambal Extra Pedas 135 ML',
          price: 7000,
          description:
            'Sasa Saus Sambal Ekstra Pedas 135 ml. Sasa saus sambal ekstra pedas adalah sambal asli dengan citarasa pedas nikmat dari cabai asli, sangat cocok untuk melengkapi saat menyantap berbagai hidangan. Sambal ini terbuat dari cabai pilihan berkualitas dengan sensasi ekstra pedas yang membuat ketagihan.',
          categoryId: 3,
        },
        {
          name: 'Saori Saus Rasa Mentega 26 ml',
          price: 3600,
          description:
            'SAORI Saus Mentega 26 ml. SAORI Saus Mentega adalah saus oriental yang dibuat dengan bubuk mentega, menjadikan masakan sehari-hari di rumah lebih istimewa dengan rasa mentega khas oriental sekelas hidangan di restoran. Rasa dominan: gurih mentega, asin, manis.',
          categoryId: 3,
        },
        {
          name: 'SAORI SAUS LADA HITAM 26 ML',
          price: 2900,
          description:
            'SAORI Lada Hitam 26ml. SAORI Saus Lada Hitam adalah saus oriental yang dibuat dengan lada hitam pilihan (lengkap dengan biji lada hitam asli). Menjadikan masakan sehari-hari di rumah lebih istimewa dengan rasa lada hitam khas oriental sekelas hidangan di restoran. Rasa dominan: pedas lada hitam, asin, dan gurih.',
          categoryId: 3,
        },
        {
          name: 'Saori Saus Teriyaki Botol 275 ml',
          price: 21200,
          description:
            'SAORI Saus Teriyaki Botol 275ml. Saori Saus Teriyaki adalah saus oriental yang dibuat dengan kecap ala Jepang, yang fungsinya untuk membuat menu Teriyaki. Rasa dominan: gurih dan manis.',
          categoryId: 3,
        },
        {
          name: 'Daun Bawang Seledri Organik 250 Gr',
          price: 15900,
          description: `Daun Bawang Seledri Organik 250 Gr. Keunggulan: ✅ Bibit Non Gmo (Genetic Modified Organism), ✅ Organic Certified, ✅ Lebih Tinggi Kandungan Vitamin Dan Enzim, Baik Untuk Metabolisme Tubuh, ✅ Lebih Ramah Lingkungan, Karena Pertanian Organik Mendukung Pelestarian Tanah Dan Keseimbangan Ekosistem. Cocok Untuk Berbagai Campuran Masakan. Berat bersih : 250 g. Saran penyimpanan : Simpan pada suhu 1-4 Celcius`,
          categoryId: 1,
        },
        {
          name: 'Lengkuas Organik 200 Gr',
          price: 12900,
          description:
            'Lengkuas Organik 200 GR. Lengkuas merupakan salah satu bahan masakan paling populer. Tidak hanya mampu menyedapkan rasa makanan, ada banyak juga manfaat lengkuas bagi kesehatan. Lengkuas memiliki kandungan gizi yang beragam dan dipercaya berkhasiat mengobati bermacam penyakit. Tanaman yang berkerabat dengan jahe ini berfungsi sebagai penyedap alami masakan serta penghilang bau ayam dan daging. Lengkuas kami ditanam secara organik di lahan bebas polutan, tidak menggunakan pestisida ataupun pupuk buatan lainnya',
          categoryId: 1,
        },
        {
          name: 'Daun Jeruk Organik 25 Gr',
          price: 7900,
          description:
            'Daun Jeruk Organik 25 Gr. Daun jeruk merupakan salah satu bumbu dapur yang sejak lama telah digunakan untuk memperkaya rasa masakan terutama di Asia. Manfaat daun jeruk datang dari kandungan vitamin C dan flavonoid yang menjadikannya ramuan obat yang baik untuk tubuh. Daun jeruk kami diperoleh dari buah jeruk purut, dan diproses secara organik tanpa menggunakan pestisida. Daun jeruk nipis memiliki aroma jeruk yang harum dan rasa lemon yang segar',
          categoryId: 1,
        },
        {
          name: 'Cabe Merah Besar Organik 150 Gr',
          price: 22900,
          description:
            'Cabe Merah Besar Organik 150 Gr. Cabai merupakan makanan yang banyak digemari oleh masyarakat, salah satunya adalah Cabai Merah. Cabai biasanya dijadikan sebagai bumbu dapur masakan atau dibuat menjadi sambal pelengkap hidangan. Cabai Merah memiliki cita rasa pedas yang menambah selera makan Anda. Di balik rasa yang pedas, ada beragam manfaat cabai untuk kesehatan. Manfaat ini dapat diperoleh karena Cabai mengandung berbagai macam nutrisi penting yang dibutuhkan tubuh, seperti protein, karbohidrat, gula, serat, lemak, vitamin A, vitamin B6, vitamin C, zat besi, magnesium, kalium, air dan capsaicin. Tidak hanya itu, Cabai Merah juga membawa banyak manfaat untuk Kesehatan, mulai dari mengatasi hidung tersumbat, meredakan nyeri, meningkatkan imunitas tubuh, mengurangi risiko terserang penyakit jantung, mencegah penyakit kanker, dan membakar lemak tubuh.',
          categoryId: 1,
        },
        {
          name: 'Cabe Rawit Merah Organik 200 Gr',
          price: 37900,
          description:
            'Cabe Rawit Merah Organik 200 GR. Cabe rawit yang ditanam di lahan bebas polutan, Bibit non gmo , sayuran di tanam tanpa bahan kimia/ Organik.',
          categoryId: 1,
        },
        {
          name: 'Cabe Hijau Besar 150 Gr',
          price: 23900,
          description:
            'Cabe Hijau Besar 150 GR. Cabe hijau besar yang ditanam di lahan alami.',
          categoryId: 1,
        },
        {
          name: 'Bawang Putih Cincang Dalam Minyak Kelapa 250 Gr',
          price: 44900,
          description:
            'Bawang Putih Cincang Dalam Minyak Kelapa 250 Gr. Komposisi Terdiri Dari Bawang Putih Pilihan Dan Minyak Kelapa. Aroma Lebih Wangi. Dikemas Aman Dalam Botol. Produk Disimpan Dalam Chiller ( Akan Terjadi Perubahan Warna Karena Adanya Proses Pembekuan Minyak). Tutup Rapat Setelah Dugunakan',
          categoryId: 1,
        },
        {
          name: 'Bawang Merah Cincang Dalam Minyak Kelapa 250 Gr',
          price: 44900,
          description:
            'Bawang Merah Cincang Dalam Minyak Kelapa 250 Gr. Komposisi Terdiri Dari bawang Merah Pilihan Dan Minyak Kelapa. Aroma Lebih Wangi. Dikemas Aman Dalam Botol. Produk Disimpan Dalam Chiller ( Akan Terjadi Perubahan Warna Karena Adanya Proses Pembekuan Minyak). Tutup Rapat Setelah Digunakan',
          categoryId: 1,
        },
        {
          name: 'Sunrise Bawang Putih Tunggal 100 Gr',
          price: 47900,
          description:
            'Sunrise Bawang Putih Tunggal 100Gr. Bawang putih tunggal merupakan keluarga dari bawang putih, hanya saja bawang putih tunggal memiliki ciri khas yaitu terdiri dari 1 siung dalam satu tangkai tanaman. Sunrise Bawang Putih Tunggal sudah teruji bebas pestisida (Certificate No. 25728/DBBPAK, Date: August 29, 2017) dan tersedia dalam kemasan berukuran 100 gram untuk memudahkan kebutuhan rumah tangga masyarakat Indonesia.',
          categoryId: 1,
        },
        {
          name: 'Sesa Temulawak Organik 250 Gr',
          price: 9900,
          description: 'Temulawak Organik 250 Gr',
          categoryId: 1,
        },
        {
          name: 'Sesa Bawang Bombay 500 Gr',
          price: 49900,
          description:
            'Bawang bombay (Allium cepa) merupakan salah satu jenis bawang yang umum digunakan di berbagai masakan. Seperti halnya bawang merah dan bawang putih, bawang bombay juga kerap digunakan sebagai bumbu untuk menambah cita rasa pada masakan. Teksturnya renyah dan memiliki aroma khas yang membantu menyedapkan masakan.',
          categoryId: 1,
        },
        {
          name: 'Sesa Bawang Merah 500 Gr',
          price: 39900,
          description:
            'Bawang merah umumnya digunakan sebagai bumbu alami masakan. Bawang merah menambahkan rasa lezat pada hidangan, serta dapat digunakan sebagai pelengkap acar, bumbu tumisan hingga jadi taburan bawang goreng. Bawang merah kami ditanam di tanah yang bersih tanpa pupuk sintetis dengan benih berkualitas tinggi dari lingkungan yang alami. Bawang merah adalah salah satu bahan favorit untuk memasak hidangan indonesia.',
          categoryId: 1,
        },
        {
          name: 'Sesa Akar Alang Alang 300 Gr',
          price: 12900,
          description:
            'Alang-alang memiliki bentuk yang hampir sama dengan tanaman padi. Tanaman ini memiliki berbagai manfaat untuk kesehatan. Biasa digunakan untuk obat herbal',
          categoryId: 1,
        },
        {
          name: 'Oatside Chocolate Malt With Straw 200 Ml',
          price: 7600,
          description:
            'Oatside Chocolate Malt With Straw 200 Ml. Dibuat dengan Oat & Malt Asli membuat kamu kenyang lebih lama dan juga berenergi sepanjang hari, Memiliki rasa yang creamy,rasa coklat yang enak,gula lebih sedikit⭐. Terbuat dari 100% Nabati Tanpa lemak jenuh dan tanpa laktosa jadi aman diperut. Hanya Menggunakan Bahan Oat Australia panggang, Kakao Sulawesi, tanpa perasa tambahan, pengental, pengemulsi. Bahan-bahan: Base Oat (Air, Oat (10%)), Bubuk Kakao 1% Ekstrak Malt 1%, Gula, Minyak Kelapa, Kalsium Karbonat,Perisa Alami, dan Sinetik,Garam Laut.',
          categoryId: 2,
        },
        {
          name: 'Sesa Pasteurisasi Goat 1L',
          price: 79900,
          description: 'Sesa Pasteurisasi Goat 1L',
          categoryId: 2,
        },
        {
          name: 'Sesa Pasteurisasi 1L',
          price: 36900,
          description: 'Sesa Pasteurisasi 1L',
          categoryId: 2,
        },
        {
          name: 'Elmhurst Milked Oats Unsweetened 946 Ml',
          price: 31100,
          description:
            'Elmhurst Milked Oats Unsweetened 946 ml. Elmhurst Milked Oats Unsweetened Terbuat dari ekstrak oat dan air filtrasi tanpa tambahan gula, yang menghasilkan minuman oats yang kental & alami.',
          categoryId: 2,
        },
        {
          name: 'Organique Water 500 Ml',
          price: 13900,
          description:
            'Organique Water adalah air mineral Alkaline yang memberikan banyak manfaat kesehatan untuk tubuh kita. Air Alkaline yang natural adalah air yang pHnya alkaline karena mineralnya, bukan disebabkan oleh modifikasi. Organique Water mengandung pH 8,5+.',
          categoryId: 2,
        },
        {
          name: 'Eternal Plus Mineral Water E+ 250 Ml',
          price: 6900,
          description:
            '100% air mineral, kesegaran dari alam, air minum dalam kemasan yang sesuai dengan standart WHO, dapat memenuhi magnesium dan calsium didalam tubuh, memiliki pH yang seimbang yaitu 8>.',
          categoryId: 2,
        },
        {
          name: 'Greenara Dark Choco Almond 120 Gr',
          price: 58900,
          description:
            'Greenara Dark Choco Almond 120 Gr. Hasil inovasi Greenara menggabungkan manisnya coklat alami premium dengan almond premium yang mampu memberikan rasa yang enak sebagai pengganti snacking pada saat sendiri atau bersama dengan keluarga, teman , sahabat. Kenapa kita harus konsumsi almond? Almond mampu membantu untuk menyeimbangkan dan menurunkan kolesterol, menjaga kesehatan jantung, membantu berat badan yang ideal jika dikonsumsi sesuai takaran saji dan mampu untuk mengurangi risiko - risiko terjadinya kanker di dalam tubuh. Komposisi : Kacang Almond Panggang, Gula Aren, Madu, Mentega, Cacao. Cara Konsumsi : Bisa di jadikan cemilan atau topping makanan. Saran Penyimpanan : Simpan di tempat sejuk dan jauhkan dari sinar matahari',
          categoryId: 2,
        },
        {
          name: 'Greenara Honey Roasted Almond 120 Gr',
          price: 58900,
          description:
            'Greenara Honey Roasted Almond 120 Gr. Hasil inovasi Greenara menggabungkan manisnya madu alami premium, gula sorghum dengan almond premium yang mampu memberikan rasa yang enak sebagai pengganti snacking pada saat sendiri atau bersama dengan keluarga, teman , sahabat. Kenapa kita harus konsumsi almond? Almond mampu membantu untuk menyeimbangkan dan menurunkan kolesterol, menjaga kesehatan jantung, membantu berat badan yang ideal jika dikonsumsi sesuai takaran saji dan mampu untuk mengurangi risiko - risiko terjadinya kanker di dalam tubuh. Komposisi : Kacang Almond Panggang , Madu , Gula Sorghum , Mentega ,Garam Himalaya dan Kayu Manis. Cara Konsumsi : Bisa di jadikan cemilan atau topping makanan. Saran Penyimpanan : Simpan di tempat sejuk dan jauhkan dari sinar matahari',
          categoryId: 2,
        },
        {
          name: 'Greenara Almond Biscotti 125 Gr',
          price: 55900,
          description:
            'Greenara Almond Biscotti 125 Gr. Teman yang paling cocok untuk ngopi dan ngeteh. Menggunakan kacang almond panggang. Menggunakan Gula Sorghum. Tanpa menggunakan pengawet, pewarna dan perasa. Tekstur Garing dan Renyah. Kemasan aman menggunakan zipper',
          categoryId: 2,
        },
        {
          name: 'Nutify Almond Garlic & Seasalt Nutify 50 Gr',
          price: 31900,
          description:
            'Dengan rasa murni bawang putih dan sedikit seasalt. Bawang putih dan seasalt menghasilkan perpaduan yang harmonis dan sempurna.Dimulai dari rasa yang murni , keharuman bawang,dan ditaburi dengan jumlah seasalt yang cukup Kombinasi antara keduanya menghasilkan rasa yang tiada duanya. Kacang ini memiliki rasa klasik dan otentik, dikombinasikan dengan kegaringan dan almond berkualitas tinggi, hanya untuk kebaikan alam.',
          categoryId: 2,
        },
      ],
    });
    await tx.productImage.createMany({
      data: [
        {
          productId: 1,
          productImage: 'src/public/image_product/image/1.jpeg',
        },
        {
          productId: 2,
          productImage: 'src/public/image_product/image/2.jpeg',
        },
        {
          productId: 3,
          productImage: 'src/public/image_product/image/3.jpeg',
        },
        {
          productId: 4,
          productImage: 'src/public/image_product/image/4.jpeg',
        },
        {
          productId: 5,
          productImage: 'src/public/image_product/image/5.jpeg',
        },
        {
          productId: 6,
          productImage: 'src/public/image_product/image/6.jpeg',
        },
        {
          productId: 7,
          productImage: 'src/public/image_product/image/7.jpeg',
        },
        {
          productId: 8,
          productImage: 'src/public/image_product/image/8.jpg',
        },
        {
          productId: 9,
          productImage: 'src/public/image_product/image/9.jpg',
        },
        {
          productId: 10,
          productImage: 'src/public/image_product/image/10.jpg',
        },
        {
          productId: 11,
          productImage: 'src/public/image_product/image/11.jpg',
        },
        {
          productId: 12,
          productImage: 'src/public/image_product/image/12.jpg',
        },
        {
          productId: 13,
          productImage: 'src/public/image_product/image/13.jpg',
        },
        {
          productId: 14,
          productImage: 'src/public/image_product/image/14.jpg',
        },
        {
          productId: 15,
          productImage: 'src/public/image_product/image/15.jpg',
        },
        {
          productId: 16,
          productImage: 'src/public/image_product/image/16.jpg',
        },
        {
          productId: 17,
          productImage: 'src/public/image_product/image/17.jpg',
        },
        {
          productId: 18,
          productImage: 'src/public/image_product/image/18.jpg',
        },
        {
          productId: 19,
          productImage: 'src/public/image_product/image/19.jpg',
        },
        {
          productId: 20,
          productImage: 'src/public/image_product/image/20.jpg',
        },
        {
          productId: 21,
          productImage: 'src/public/image_product/image/21.jpg',
        },
        {
          productId: 22,
          productImage: 'src/public/image_product/image/22.jpg',
        },
        {
          productId: 23,
          productImage: 'src/public/image_product/image/23.jpg',
        },
        {
          productId: 24,
          productImage: 'src/public/image_product/image/24.jpg',
        },
        {
          productId: 25,
          productImage: 'src/public/image_product/image/25.jpg',
        },
        {
          productId: 26,
          productImage: 'src/public/image_product/image/26.jpg',
        },
        {
          productId: 27,
          productImage: 'src/public/image_product/image/27.jpg',
        },
        {
          productId: 28,
          productImage: 'src/public/image_product/image/28.jpg',
        },
        {
          productId: 29,
          productImage: 'src/public/image_product/image/29.jpg',
        },
        {
          productId: 30,
          productImage: 'src/public/image_product/image/30.jpg',
        },
      ],
    });
  });
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
