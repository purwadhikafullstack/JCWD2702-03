/*
  Warnings:

  - You are about to drop the column `confirmPassword` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `confirmPassword`,
    DROP COLUMN `phoneNumber`,
    MODIFY `password` VARCHAR(191) NULL;
