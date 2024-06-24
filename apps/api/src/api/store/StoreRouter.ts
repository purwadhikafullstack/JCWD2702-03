import { Router } from 'express';
import {
  createStore,
  deletedStore,
  findAllStore,
  findStoreById,
  updateStore,
} from './StoreController';

const router = Router();

router.post('/', createStore);
router.put('/:id', updateStore);
router.get('/', findAllStore);
router.get('/:id', findStoreById);
router.delete('/:id', deletedStore);

export default router;
