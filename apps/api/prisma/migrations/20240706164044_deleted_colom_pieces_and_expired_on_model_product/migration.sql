/*
  Warnings:

  - You are about to alter the column `pieces` on the `discountproduct` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to drop the column `expired` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `pieces` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `discountproduct` MODIFY `pieces` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `expired`,
    DROP COLUMN `pieces`;
