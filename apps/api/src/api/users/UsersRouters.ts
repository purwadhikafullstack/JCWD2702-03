import { Router } from "express";
import { registerUsers } from "./UsersController";
import { validatorCreateUsers } from "../../middleware/UsersValidator";
import { handleErrorValidator } from "@/middleware/HandleErrorExpressValidator";
import { tokenVerify } from "../../helpers/Token";

const router = Router();

router.post('/', validatorCreateUsers, handleErrorValidator, registerUsers)

export default router