import { Router } from "express";
import { CreateRoleController } from "./RoleController";

const router = Router();

router.post('/', CreateRoleController)

export default router