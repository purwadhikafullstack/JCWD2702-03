import { Router } from 'express';
import {
  createProduct,
  deletedProduct,
  findProduct,
  updateProduct,
  findProductById,
  filterProduct,
  discountProduct,
} from './ProductController';
import { uploaderProduct } from '@/middleware/Uploader/UploaderProduct';
import { tokenVerify } from '@/helpers/Token';
import { roleVerify } from '@/middleware/RoleVerify';

const router = Router();

router.post('/', uploaderProduct, createProduct);
router.put('/:id', uploaderProduct, updateProduct);
router.post('/discount/', discountProduct);
router.get('/', findProduct);
router.get('/filter', filterProduct);
router.get('/:id', findProductById);
router.delete('/:id', deletedProduct);
export default router;
