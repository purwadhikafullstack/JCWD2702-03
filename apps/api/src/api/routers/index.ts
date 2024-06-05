import express, { Router } from 'express';
import UsersRouters from '../users/UsersRouters'
import RoleRouters from '../role/RoleRouters'
import AuthRouters from '../auth/AuthRouters'

const router = Router();
router.use(express.json());
router.use('*/image', express.static('src/public/image'));

router.use('/role', RoleRouters)
router.use('/register', UsersRouters)
router.use('/auth', AuthRouters)

export default router;
