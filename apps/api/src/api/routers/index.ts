import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';

const router = Router();
router.use(express.json());
router.use('*/image', express.static('src/public/image'));

router.use('/product', ProductRouter);

export default router;
