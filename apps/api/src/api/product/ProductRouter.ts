import { Router } from 'express';
import {
  createProductController,
  deletedProductController,
  findAllAndFilterProductController,
  updateProductController,
  findProductByIdController,
} from './ProductController';
import { uploader } from '@/middleware/Uploader';

const router = Router();

router.post('/', uploader, createProductController);
router.put('/:id', uploader, updateProductController);
router.get('/', findAllAndFilterProductController);
router.get('/:id', findProductByIdController);
router.delete('/:id', deletedProductController);
export default router;
