import { Router } from "express";
import { passwordVerification, registerUserWithGoogle, registerUsers } from "./UsersController";
import { validatorCreateUsers } from "../../middleware/UsersValidator";
import { handleErrorValidator } from "@/middleware/HandleErrorExpressValidator";
import { tokenVerify } from "../../helpers/Token";

const router = Router();

router.post('/', validatorCreateUsers, handleErrorValidator, registerUsers)
router.post('/users-verification', tokenVerify, passwordVerification)
router.post('/google', registerUserWithGoogle)
export default router