import { rmSync } from 'fs';

<<<<<<<< HEAD:apps/api/src/helpers/product/DeletedFileProduct.ts
export const deletedUploadFileProduct = (files: any) => {
  if (files) {
    const uploadFiles = Array.isArray(files) ? files : files['image_product'];
========
export const DeletedUploadFile = (files: any) => {
  if (files) {
    const uploadFiles = Array.isArray(files) ? files : files['profile_images'];
>>>>>>>> b1e391518a9bb7ecef79d7cfd728a37bd6e7d8ee:apps/api/src/helpers/UserProfile/DeletedProfileFile.ts

    if (Array.isArray(uploadFiles)) {
      uploadFiles?.forEach((item) => {
        if (item.path) rmSync(item.path);
        if (item.url) rmSync(item.url);
      });
    }
  }
};
