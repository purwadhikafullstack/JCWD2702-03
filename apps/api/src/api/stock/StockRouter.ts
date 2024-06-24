import { Router } from 'express';
import {
  createStock,
  deleteStock,
  findAllStock,
  findStockById,
  updateStock,
} from './StockController';

const router = Router();

router.post('/', createStock);
router.put('/:id', updateStock);
router.get('/', findAllStock);
router.get('/:id', findStockById);
router.delete('/:id', deleteStock);

export default router;
