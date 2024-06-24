/*
  Warnings:

  - You are about to drop the column `code_voucher` on the `discounts` table. All the data in the column will be lost.
  - You are about to drop the column `discount_voucher` on the `discounts` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `discounts` table. All the data in the column will be lost.
  - Added the required column `code` to the `discounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `discounts` DROP FOREIGN KEY `discounts_productId_fkey`;

-- AlterTable
ALTER TABLE `discounts` DROP COLUMN `code_voucher`,
    DROP COLUMN `discount_voucher`,
    DROP COLUMN `productId`,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `min_pay` INTEGER NULL,
    ADD COLUMN `pieces` INTEGER NOT NULL DEFAULT 0;
