import { Router } from 'express';
import {
  createProduct,
  deletedProduct,
  findAllAndFilterProduct,
  updateProduct,
  findProductById,
} from './ProductController';
import { uploaderProduct } from '@/middleware/Uploader/UploaderProduct';

const router = Router();

router.post('/', uploaderProduct, createProduct);
router.put('/:id', uploaderProduct, updateProduct);
router.get('/', findAllAndFilterProduct);
router.get('/:id', findProductById);
router.delete('/:id', deletedProduct);
export default router;
