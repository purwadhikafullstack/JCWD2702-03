import multer, { StorageEngine, FileFilterCallback } from 'multer';
import fs from 'fs';
import { CustomFile } from './type';

const defaultDirectory = 'src/public';

const storage: StorageEngine = multer.diskStorage({
    destination: function (req: Express.CustomRequest, file: CustomFile, cb: (error: Error | null, destination: string) => void) {
        const childDirectoryBasedOnMimetype = file.mimetype.split('/')[0];
        const isDirectoryExist = fs.existsSync(`${defaultDirectory}/${childDirectoryBasedOnMimetype}`);

        if (isDirectoryExist === false) {
            fs.mkdirSync(`${defaultDirectory}/${childDirectoryBasedOnMimetype}`, { recursive: true });
        }
        cb(null, `${defaultDirectory}/${childDirectoryBasedOnMimetype}`); // 'images/webp or application/pdf'
    }, 
    filename: function (req: Express.CustomRequest, file: CustomFile, cb: (error: Error | null, filename: string) => void) {
        const randomNumber = Math.ceil(Math.random() * 10000000000000);
        const splitOriginalName = file.originalname.split('.');
        const fileExtension = splitOriginalName[splitOriginalName.length - 1];
   
        cb(null, `${Date.now()}_${randomNumber}.${fileExtension}`);
    }
});

const fileFilter = (req: Express.CustomRequest, file: CustomFile, cb: FileFilterCallback) => {
    const fileAccepted = ['jpg', 'jpeg', 'png'];

    const splitOriginalName = file.originalname.split('.');
    const fileExtension = splitOriginalName[splitOriginalName.length - 1].toLowerCase();

    if (fileAccepted.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error('Format Not Accepted! Only .jpg, .jpeg, and .png are allowed.'));
    }
};

const uploadLimits = {
    fileSize: 1 * 1024 * 1024 // 1MB in bytes
};

export const multerUpload = multer({ 
    storage: storage, 
    fileFilter: fileFilter,
    limits: uploadLimits
});
