import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$transaction(async (tx) => {
    // await tx.productCategory.createMany({
    //   data: [
    //     {
    //       name: 'Rempah - Rempah',
    //     },
    //     {
    //       name: 'Makanan dan Minuman',
    //     },
    //     {
    //       name: 'Kebutuhan Dapur',
    //     },
    //     {
    //       name: 'Lainnya',
    //     },
    //   ],
    // });

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
    // await tx.product.createMany({
    //   data: [
    //     {
    //       name: 'Jahe',
    //       price: parseInt('5000'),
    //       description: 'Jahe alami sehat untuk tubuh',
    //       categoryId: 1,
    //     },
    //   ],
    // });
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
