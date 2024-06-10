import { Router } from 'express';
import { loginUsers } from './AuthControllers';

const router = Router();

router.post('/login', loginUsers);

export default router;
