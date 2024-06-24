import { Request, Response, NextFunction } from 'express';
<<<<<<<< HEAD:apps/api/src/middleware/Uploader/UploaderProduct.ts
import { multerUploadProduct } from '@/helpers/product/MulterProduct';
import { rmSync } from 'fs';

export const uploaderProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const upload = multerUploadProduct.fields([
    { name: 'image_product', maxCount: 3 },
  ]);
========
import { multerUpload } from '../../helpers/UserProfile/MulterProfile';
import { rmSync } from 'fs';

export const uploader = (req: Request, res: Response, next: NextFunction) => {
  const upload = multerUpload.fields([{ name: 'profile_images', maxCount: 1 }]);
>>>>>>>> b1e391518a9bb7ecef79d7cfd728a37bd6e7d8ee:apps/api/src/middleware/Uploader/UploaderProfile.ts

  upload(req, res, function (err) {
    try {
      if (err) throw err;

      if (req.files) {
        const uploadFiles = Array.isArray(req.files)
          ? req.files
<<<<<<<< HEAD:apps/api/src/middleware/Uploader/UploaderProduct.ts
          : req.files['image_product'];
========
          : req.files['profile_images'];
>>>>>>>> b1e391518a9bb7ecef79d7cfd728a37bd6e7d8ee:apps/api/src/middleware/Uploader/UploaderProfile.ts

        if (Array.isArray(uploadFiles)) {
          uploadFiles?.forEach((item) => {
            if (item.size > 10000000) {
              throw { message: `${item.originalname} is to Large` };
            }
          });
        }
      }
      next();
    } catch (error: any) {
      if (req.files) {
        const uploadFiles = Array.isArray(req.files)
          ? req.files
<<<<<<<< HEAD:apps/api/src/middleware/Uploader/UploaderProduct.ts
          : req.files['image_product'];
========
          : req.files['profile_images'];
>>>>>>>> b1e391518a9bb7ecef79d7cfd728a37bd6e7d8ee:apps/api/src/middleware/Uploader/UploaderProfile.ts

        if (Array.isArray(uploadFiles)) {
          uploadFiles?.forEach((item) => {
            rmSync(item.path);
          });
        }
      }
      next({
        status: 500,
        message: error.message,
      });
    }
  });
};
