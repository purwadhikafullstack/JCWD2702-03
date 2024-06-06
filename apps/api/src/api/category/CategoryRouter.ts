import { Router } from 'express';
import {
  CreateCategoryController,
  DeletedCategoryController,
  FindAllCategoryController,
  UpdateCategoryController,
} from './CategoryController';

const router = Router();

router.post('/', CreateCategoryController);
router.put('/:id', UpdateCategoryController);
router.get('/', FindAllCategoryController);
router.delete('/', DeletedCategoryController);

export default router;
