import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$transaction(async (tx) => {
    await tx.productCategory.createMany({
      data: [
        {
          name: 'Rempah - Rempah',
        },
        {
          name: 'Sayur',
        },
        {
          name: 'Buah',
        },
      ],
    });

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
