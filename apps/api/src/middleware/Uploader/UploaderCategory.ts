import { Request, Response, NextFunction } from 'express';
import { multerUploadCategory } from '@/helpers/category/MulterCategory';
import { rmSync } from 'fs';

export const uploaderCategory = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const upload = multerUploadCategory.fields([
    { name: 'image_category', maxCount: 1 },
  ]);

  upload(req, res, function (err) {
    try {
      if (err) throw err;

      if (req.files) {
        const uploadFiles = Array.isArray(req.files)
          ? req.files
          : req.files['image_category'];

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
          : req.files['image_category'];

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
