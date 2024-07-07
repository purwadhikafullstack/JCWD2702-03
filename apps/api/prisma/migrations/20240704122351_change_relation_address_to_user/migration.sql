/*
  Warnings:

  - You are about to drop the column `addressId` on the `user_profiles` table. All the data in the column will be lost.
  - Added the required column `userUid` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_profiles` DROP FOREIGN KEY `user_profiles_addressId_fkey`;

-- AlterTable
ALTER TABLE `address` ADD COLUMN `userUid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_profiles` DROP COLUMN `addressId`;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
