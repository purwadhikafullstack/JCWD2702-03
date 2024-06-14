import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';
import CategoryRouter from '../category/CategoryRouter';
import UsersRouters from '../users/UsersRouters';
import RoleRouters from '../role/RoleRouters';
import AuthRouters from '../auth/AuthRouters';
import StoreRouter from '../store/StoreRouter';
import StockRouter from '../stock/StockRouter';

const router = Router();
router.use(express.json());
router.use('*/image_product', express.static('src/public/image_product'));
router.use('*/image_category', express.static('src/public/image_category'));

router.use('/product', ProductRouter);
router.use('/category', CategoryRouter);
router.use('/store', StoreRouter);
router.use('/stock', StockRouter);
router.use('/role', RoleRouters);
router.use('/register', UsersRouters);
router.use('/auth', AuthRouters);

export default router;
