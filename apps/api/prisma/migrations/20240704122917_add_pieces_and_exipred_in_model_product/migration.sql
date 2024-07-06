-- AlterTable
ALTER TABLE `products` ADD COLUMN `expired` DATETIME(3) NULL,
    ADD COLUMN `pieces` INTEGER NULL DEFAULT 0;
