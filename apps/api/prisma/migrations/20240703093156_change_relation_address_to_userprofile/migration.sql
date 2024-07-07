/*
  Warnings:

  - You are about to drop the column `addressId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_addressId_fkey`;

-- AlterTable
ALTER TABLE `user_profiles` ADD COLUMN `addressId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `addressId`;

-- AddForeignKey
ALTER TABLE `user_profiles` ADD CONSTRAINT `user_profiles_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
