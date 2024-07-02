import { Router } from "express";
import { getUserUid, passwordVerification, registerUserWithGoogle, registerUsers, resetPasswordVerification, resendEmailVerification, forgotPassword } from "./UsersController";
import { validatorCreateUsers } from "../../middleware/UsersValidator";
import { handleErrorValidator } from "@/middleware/HandleErrorExpressValidator";
import { tokenVerify } from "../../helpers/Token";
import ProfileRouters  from "../users/profile/ProfileRouters";
import AddressRouter from  '../users/address/AddressRouter'

const router = Router();

router.use('/profile', ProfileRouters)
router.use('/address', AddressRouter)

router.post('/register', validatorCreateUsers, handleErrorValidator, registerUsers)
router.post('/verification', tokenVerify, passwordVerification)
router.post('/google', registerUserWithGoogle)
router.put('/reset-password', tokenVerify, resetPasswordVerification)
router.get('/',tokenVerify, getUserUid)
router.post('/resend-email',  resendEmailVerification)
router.put('/forgot-password', forgotPassword)

export default router
