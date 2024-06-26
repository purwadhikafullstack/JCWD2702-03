import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';
import UsersRouters from '../users/UsersRouters'
import AuthRouters from '../auth/AuthRouters'
import RoleRouters from '../auth/role/RoleRouters'


const router = Router();

router.use(express.json());
router.use('*/image', express.static('src/public/image'));

router.use('/product', ProductRouter);
router.use('/role', RoleRouters);
router.use('/register', UsersRouters);
router.use('/auth', AuthRouters)

export default router;
