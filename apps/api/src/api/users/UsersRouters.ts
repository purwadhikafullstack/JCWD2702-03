import { Router } from "express";
import { CreateUserControllers } from "./UsersController";

const router = Router();

router.post('/', CreateUserControllers)

export default router