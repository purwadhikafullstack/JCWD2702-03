import { Router } from 'express';
import {
  CreateCategory,
  DeletedCategory,
  FilterCategory,
  FindCategory,
  FindCategoryById,
  UpdateCategory,
} from './CategoryController';
import { uploaderCategory } from '@/middleware/Uploader/UploaderCategory';

const router = Router();

router.post('/', uploaderCategory, CreateCategory);
router.put('/:id', uploaderCategory, UpdateCategory);
router.get('/', FindCategory);
router.get('/filter', FilterCategory);
router.get('/:id', FindCategoryById);
router.delete('/:id', DeletedCategory);

export default router;
