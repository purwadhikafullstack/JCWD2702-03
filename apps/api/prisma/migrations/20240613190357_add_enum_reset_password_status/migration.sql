/*
  Warnings:

  - Added the required column `expiredAt` to the `reset_passwords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reset_passwords` ADD COLUMN `expiredAt` DATETIME(3) NOT NULL,
    ADD COLUMN `status` ENUM('PENDING', 'DONE', 'EXPIRED') NOT NULL DEFAULT 'PENDING';
