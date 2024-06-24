import { rmSync } from 'fs';

export const deletedUploadedFiles = (files: any) => {
    if(files){
        const uploadedFiles = Array.isArray(files) ? files : files['product_images'];
        
        if(Array.isArray(uploadedFiles)){
            uploadedFiles?.forEach(item => {
                if(item.path) rmSync(item.path)
                if(item.url) rmSync(item.url)
            })
        }
    }
}