import { Request, Response, NextFunction } from 'express';
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

  upload(req, res, function (err) {
    try {
      if (err) throw err;

      if (req.files) {
        const uploadFiles = Array.isArray(req.files)
          ? req.files
          : req.files['image_product'];

        if (Array.isArray(uploadFiles)) {
          uploadFiles?.forEach((item) => {
            if (item.size > 1000000) {
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
          : req.files['image_product'];

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
