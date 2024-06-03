/*
  Warnings:

  - You are about to drop the column `product_id` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `discounts` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `product_image` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `shipping` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `stok_products` table. All the data in the column will be lost.
  - You are about to drop the column `store_id` on the `stok_products` table. All the data in the column will be lost.
  - You are about to drop the column `location_id` on the `stores` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `ktp` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the `location_stores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_address` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userUid]` on the table `user_profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUid` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `discounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `product_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productImage` to the `product_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `stok_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeId` to the `stok_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUid` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `user_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUid` to the `user_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carts` DROP COLUMN `product_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `userUid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `discounts` DROP COLUMN `product_id`,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payments` DROP COLUMN `transaction_id`,
    ADD COLUMN `transactionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product_images` ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `productImage` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `category_id`,
    DROP COLUMN `product_image`,
    DROP COLUMN `quantity`,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `shipping` DROP COLUMN `transaction_id`,
    ADD COLUMN `transactionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `stok_products` DROP COLUMN `product_id`,
    DROP COLUMN `store_id`,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `location_id`,
    ADD COLUMN `address` MEDIUMTEXT NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `province` VARCHAR(191) NOT NULL,
    ADD COLUMN `zip_code` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `product_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `userUid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_profiles` DROP COLUMN `address`,
    DROP COLUMN `city`,
    DROP COLUMN `ktp`,
    DROP COLUMN `phone_number`,
    DROP COLUMN `province`,
    DROP COLUMN `user_id`,
    DROP COLUMN `zip_code`,
    ADD COLUMN `addressId` INTEGER NOT NULL,
    ADD COLUMN `userUid` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `location_stores`;

-- DropTable
DROP TABLE `product_details`;

-- DropTable
DROP TABLE `user_images`;

-- DropTable
DROP TABLE `users_address`;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `province` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_profiles_userUid_key` ON `user_profiles`(`userUid`);

-- AddForeignKey
ALTER TABLE `user_profiles` ADD CONSTRAINT `user_profiles_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_profiles` ADD CONSTRAINT `user_profiles_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `products_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_images` ADD CONSTRAINT `product_images_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stok_products` ADD CONSTRAINT `stok_products_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stok_products` ADD CONSTRAINT `stok_products_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipping` ADD CONSTRAINT `shipping_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `discounts` ADD CONSTRAINT `discounts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
