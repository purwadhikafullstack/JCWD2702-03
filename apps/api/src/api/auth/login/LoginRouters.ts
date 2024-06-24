import { Router } from 'express';
import { keepLogin, loginUsers } from './LoginControllers';
import { tokenVerify } from '@/helpers/Token';

const router = Router();

router.post('/', loginUsers);
router.post('/keep-login',tokenVerify, keepLogin)

export default router;