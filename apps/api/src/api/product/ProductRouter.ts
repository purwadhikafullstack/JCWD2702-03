import { Router } from 'express';
import {
  createProductController,
  deletedProductController,
  findAllProductController,
  updateProductController,
  findProductByIdController,
} from './ProductController';
import { uploader } from '@/middleware/Uploader';

const router = Router();

router.post('/', uploader, createProductController);
router.put('/:id', uploader, updateProductController);
router.get('/', findAllProductController);
router.get('/:id', findProductByIdController);
router.delete('/:id', deletedProductController);
export default router;
