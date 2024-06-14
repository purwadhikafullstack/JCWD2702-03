import { rmSync } from 'fs';

export const deletedUploadFileCategory = (files: any) => {
  if (files) {
    const uploadFiles = Array.isArray(files) ? files : files['image_category'];

    if (Array.isArray(uploadFiles)) {
      uploadFiles?.forEach((item) => {
        if (item.path) rmSync(item.path);
        if (item.url) rmSync(item.url);
      });
    }
  }
};
