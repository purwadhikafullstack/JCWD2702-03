/*
  Warnings:

  - You are about to drop the column `categoryUrl` on the `products_category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products_category` DROP COLUMN `categoryUrl`;

-- CreateTable
CREATE TABLE `product_category_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `productCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_category_image` ADD CONSTRAINT `product_category_image_productCategoryId_fkey` FOREIGN KEY (`productCategoryId`) REFERENCES `products_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
