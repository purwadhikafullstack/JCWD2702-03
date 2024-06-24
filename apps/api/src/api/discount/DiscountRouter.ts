import { Router } from 'express';
import {
  createDiscount,
  findByIdDiscount,
  findDiscount,
  updateDiscount,
} from './DiscountController';

const router = Router();

router.post('/', createDiscount);
router.put('/:id', updateDiscount);
router.get('/', findDiscount);
router.get('/:id', findByIdDiscount);

export default router;
