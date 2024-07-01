import multer from 'multer';
import fs from 'fs';

const defaultDirectory = 'src/public/profile_images';

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    const childDirectory = file.mimetype.split('/')[0];
    const isDirectoryExist = fs.existsSync(
      `${defaultDirectory}/${childDirectory}`,
    );

    if (isDirectoryExist === false) {
      fs.mkdirSync(`${defaultDirectory}/${childDirectory}`, {
        recursive: true,
      });
    }
    cb(null, `${defaultDirectory}/${childDirectory}`);
  },
  filename: function (req: any, file: any, cb: any) {
    const randomNumber = Math.ceil(Math.random() * 10000);
    const splitOriginalName = file.originalname.split('.');
    const fileExtension = splitOriginalName[splitOriginalName.length - 1];

    cb(null, `${Date.now()}_${randomNumber}.${fileExtension}`);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const fileAccepted = ['webp', 'jpg', 'jpeg', 'png', 'gif'];

  const splitOriginalName = file.originalname.split('.');
  const fileExtension = splitOriginalName[splitOriginalName.length - 1];

  if (fileAccepted.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Format Not Accepted!'));
  }
};

export const multerUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
