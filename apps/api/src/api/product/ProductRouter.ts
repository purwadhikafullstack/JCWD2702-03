import { Router } from 'express';
import {
  createProduct,
  deletedProduct,
  findAllAndFilterProduct,
  updateProduct,
  findProductById,
} from './ProductController';
<<<<<<< HEAD
import { uploaderProduct } from '@/middleware/Uploader/UploaderProduct';
=======
import { uploader } from '@/middleware/Uploader/UploaderProfile';
>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b

const router = Router();

router.post('/', uploaderProduct, createProduct);
router.put('/:id', uploaderProduct, updateProduct);
router.get('/', findAllAndFilterProduct);
router.get('/:id', findProductById);
router.delete('/:id', deletedProduct);
export default router;
