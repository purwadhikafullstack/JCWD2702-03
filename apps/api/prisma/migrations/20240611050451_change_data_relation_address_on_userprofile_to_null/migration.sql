-- DropForeignKey
ALTER TABLE `user_profiles` DROP FOREIGN KEY `user_profiles_addressId_fkey`;

-- AlterTable
ALTER TABLE `user_profiles` MODIFY `addressId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `user_profiles` ADD CONSTRAINT `user_profiles_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
