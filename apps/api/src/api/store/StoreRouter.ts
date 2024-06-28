import { Router } from 'express';
import {
  createStore,
  deletedStore,
  filterStore,
  findStore,
  findStoreById,
  updateStore,
} from './StoreController';

const router = Router();

router.post('/', createStore);
router.put('/:id', updateStore);
router.get('/', findStore);
router.get('/filter', filterStore);
router.get('/:id', findStoreById);
router.delete('/:id', deletedStore);

export default router;
