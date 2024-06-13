import { Router } from 'express';
import {
  CreateCategory,
  DeletedCategory,
  FindAllCategory,
  FindCategoryById,
  UpdateCategory,
} from './CategoryController';
import { uploaderCategory } from '@/middleware/Uploader/UploaderCategory';

const router = Router();

router.post('/', uploaderCategory, CreateCategory);
router.put('/:id', uploaderCategory, UpdateCategory);
router.get('/', FindAllCategory);
router.get('/:id', FindCategoryById);
router.delete('/', DeletedCategory);

export default router;
