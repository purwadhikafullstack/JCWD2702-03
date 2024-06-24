import { rmSync } from 'fs';

export const DeletedUploadFile = (files: any) => {
  if (files) {
    const uploadFiles = Array.isArray(files) ? files : files['profile_images'];

    if (Array.isArray(uploadFiles)) {
      uploadFiles?.forEach((item) => {
        if (item.path) rmSync(item.path);
        if (item.url) rmSync(item.url);
      });
    }
  }
};
