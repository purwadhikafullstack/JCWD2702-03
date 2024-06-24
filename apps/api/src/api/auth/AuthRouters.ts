import { Router } from "express";
import LoginRouters from '../auth/login/LoginRouters'
import RoleRouters from '../auth/role/RoleRouters'

const router = Router()

router.use('/login', LoginRouters)
router.use('/role', RoleRouters)

export default router