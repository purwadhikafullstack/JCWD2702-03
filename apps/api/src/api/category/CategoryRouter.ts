import { Router } from 'express';
import {
  CreateCategoryController,
  DeletedCategoryController,
  FindAllCategoryController,
  FindCategoryByIdController,
  UpdateCategoryController,
} from './CategoryController';

const router = Router();

router.post('/', CreateCategoryController);
router.put('/:id', UpdateCategoryController);
router.get('/', FindAllCategoryController);
router.get('/:id', FindCategoryByIdController);
router.delete('/', DeletedCategoryController);

export default router;
