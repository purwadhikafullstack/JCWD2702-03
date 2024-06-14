import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';


import CategoryRouter from '../category/CategoryRouter';
import UsersRouters from '../users/UsersRouters';
<<<<<<< HEAD
import { CreateRoleServices } from '../auth/role/RoleServices';
import AuthRouters from '../auth/AuthRouters';
=======
import RoleRouters from '../auth/role/RoleRouters';
import AuthRouters from '../auth/AuthRouters';

>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b

const router = Router();
router.use(express.json());
<<<<<<< HEAD
router.use('*/image_product', express.static('src/public/image_product'));
router.use('*/image_category', express.static('src/public/image_category'));
=======
router.use('*/image', express.static('src/public/image'));

>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b
router.use('/product', ProductRouter);
router.use('/category', CategoryRouter);
router.use('/role', CreateRoleServices);
router.use('/register', UsersRouters);
router.use('/auth', AuthRouters);
<<<<<<< HEAD

=======
>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b

export default router;
