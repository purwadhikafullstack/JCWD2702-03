import multer from 'multer';
import fs from 'fs';

<<<<<<< HEAD:apps/api/src/helpers/product/MulterProduct.ts
const defaultDirectory = 'src/public/image_product';
=======
const defaultDirectory = 'src/public'
>>>>>>> b1e391518a9bb7ecef79d7cfd728a37bd6e7d8ee:apps/api/src/helpers/Multer.ts

const storage = multer.diskStorage({
    destination: function (req, file: any, cb){
        const childDirectoryBasedOnMimetype = file.mimetype.split('/')[0]
        const isDirectoryExist = fs.existsSync(`${defaultDirectory}/${childDirectoryBasedOnMimetype}`)

        if(isDirectoryExist === false){
            fs.mkdirSync(`${defaultDirectory}/${childDirectoryBasedOnMimetype}`, {recursive: true})
        }
        cb(null, `${defaultDirectory}/${childDirectoryBasedOnMimetype}`) // 'images/webp or application/pdf'
    }, 
    filename: function(req, file, cb){
        const randomNumber = Math.ceil(Math.random() * 10000000000000)
        const splitOriginalName = file.originalname.split('.')
        const fileExtension = splitOriginalName[splitOriginalName.length-1]
   
        cb(null, `${Date.now()}_${randomNumber}.${fileExtension}`, )
    }
})

const fileFilter = (req: any, file: any, cb: any) => {
    const fileAccepted = ['webp', 'jpg', 'jpeg', 'png']

    const splitOriginalName = file.originalname.split('.')
    const fileExtension = splitOriginalName[splitOriginalName.length-1]
    console.log('>>><<<');
    
    console.log(file);
    
    if(fileAccepted.includes(fileExtension)){
        cb(null, true)
    }else{
        cb(new Error('Format Not Accepted!'))
    }
}

<<<<<<< HEAD:apps/api/src/helpers/product/MulterProduct.ts
  if (fileAccepted.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Format Not Accepted!'));
  }
};

export const multerUploadProduct = multer({
  storage: storage,
  fileFilter: fileFilter,
});
=======
export const multerUpload = multer({storage: storage, fileFilter: fileFilter})
>>>>>>> b1e391518a9bb7ecef79d7cfd728a37bd6e7d8ee:apps/api/src/helpers/Multer.ts
