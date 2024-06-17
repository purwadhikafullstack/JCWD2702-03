import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';


import CategoryRouter from '../category/CategoryRouter';
import UsersRouters from '../users/UsersRouters';
import { CreateRoleServices } from '../auth/role/RoleServices';
import AuthRouters from '../auth/AuthRouters';
import cartRouters from '../Cart/cartRouter'
import cityRouters from '../RajaOngkir/city'
import costRouters from '../RajaOngkir/cost'
import midtrans from '../Checkout/midtrans'

const router = Router();
router.use(express.json());
router.use('*/image_product', express.static('src/public/image_product'));
router.use('*/image_category', express.static('src/public/image_category'));
router.use('/product', ProductRouter);
router.use('/category', CategoryRouter);
router.use('/role', CreateRoleServices);
router.use('/register', UsersRouters);
router.use('/auth', AuthRouters);
router.use('/cart',cartRouters)
router.use('/city',cityRouters)
router.use('/cost',costRouters)
router.use('/midtrans',midtrans)

export default router;
