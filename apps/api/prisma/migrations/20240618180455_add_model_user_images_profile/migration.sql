/*
  Warnings:

  - You are about to drop the column `fullname` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `user_profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user_profiles` DROP COLUMN `fullname`,
    DROP COLUMN `profile_image`;

-- CreateTable
CREATE TABLE `user_images_profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `userProfileId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_images_profiles` ADD CONSTRAINT `user_images_profiles_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `user_profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
