import { Router } from 'express';
import {
  createStock,
  deleteStock,
  filterStok,
  findStock,
  findStockById,
  updateStock,
} from './StockController';

const router = Router();

router.post('/', createStock);
router.put('/:id', updateStock);
router.get('/', findStock);
router.get('/filter', filterStok);
router.get('/:id', findStockById);
router.delete('/:id', deleteStock);

export default router;
