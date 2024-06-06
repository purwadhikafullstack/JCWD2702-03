import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';
import CategoryRouter from '../category/CategoryRouter';
import UsersRouters from '../users/UsersRouters';
import RoleRouters from '../role/RoleRouters';

const router = Router();
router.use(express.json());
router.use('*/image', express.static('src/public/image'));

router.use('/product', ProductRouter);
router.use('/category', CategoryRouter);
router.use('/role', RoleRouters);
router.use('/register', UsersRouters);

export default router;
