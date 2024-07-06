import { Router } from 'express';
import {
  findRestoreCategory,
  findRestoreProduct,
  findRestoreStore,
  restoreCategory,
  restoreCategoryById,
  restoreProduct,
  restoreProductById,
  restoreStore,
  restoreStoreById,
} from './RestoreController';
const router = Router();

router.get('/product', findRestoreProduct);
router.patch('/product', restoreProduct);
router.patch('/product/:id', restoreProductById);
router.get('/store', findRestoreStore);
router.patch('/store', restoreStore);
router.patch('/store/:id', restoreStoreById);
router.get('/category', findRestoreCategory);
router.patch('/category', restoreCategory);
router.patch('/category/:id', restoreCategoryById);

export default router;
