-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `products_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
