-- AlterTable
ALTER TABLE `address` ADD COLUMN `mainAddress` ENUM('TRUE', 'FALSE') NOT NULL DEFAULT 'FALSE';
