import { rmSync } from 'fs';

export const deletedUploadFileProduct = (files: any) => {
  if (files) {
    const uploadFiles = Array.isArray(files) ? files : files['image_product'];

    if (Array.isArray(uploadFiles)) {
      uploadFiles?.forEach((item) => {
        if (item.path) rmSync(item.path);
        if (item.url) rmSync(item.url);
      });
    }
  }
};
