/*
  Warnings:

  - You are about to drop the column `addressId` on the `user_profiles` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_profiles` DROP FOREIGN KEY `user_profiles_addressId_fkey`;

-- AlterTable
ALTER TABLE `user_profiles` DROP COLUMN `addressId`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `addressId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
