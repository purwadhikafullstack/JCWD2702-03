<<<<<<< HEAD
import { Router } from 'express';
// import { registerUsers } from "./UsersController";
import { validatorCreateUsers } from '../../middleware/UsersValidator';
import { handleErrorValidator } from '@/middleware/HandleErrorExpressValidator';
import { tokenVerify } from '../../helpers/Token';

const router = Router();

// router.post('/', validatorCreateUsers, handleErrorValidator, registerUsers);

export default router;
=======
import { Router } from "express";
import { passwordVerification, registerUserWithGoogle, registerUsers, resetPasswordVerification } from "./UsersController";
import { validatorCreateUsers } from "../../middleware/UsersValidator";
import { handleErrorValidator } from "@/middleware/HandleErrorExpressValidator";
import { tokenVerify } from "../../helpers/Token";

const router = Router();

router.post('/', validatorCreateUsers, handleErrorValidator, registerUsers)
router.post('/users-verification', tokenVerify, passwordVerification)
router.post('/google', registerUserWithGoogle)
router.put('/reset-password', tokenVerify, resetPasswordVerification)
export default router
>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b
