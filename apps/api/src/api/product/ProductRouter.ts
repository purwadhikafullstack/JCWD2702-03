import { Router } from 'express';
import {
  createProductController,
  deletedProductController,
  findAllProductController,
  updateProductController,
} from './ProductController';
import { uploader } from '@/middleware/Uploader';

const router = Router();

router.post('/', uploader, createProductController);
router.put('/:id', uploader, updateProductController);
router.get('/', findAllProductController);
router.delete('/', deletedProductController);
export default router;
