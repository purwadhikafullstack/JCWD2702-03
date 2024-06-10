/*
  Warnings:

  - A unique constraint covering the columns `[userUid,productId]` on the table `carts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `carts_userUid_productId_key` ON `carts`(`userUid`, `productId`);
