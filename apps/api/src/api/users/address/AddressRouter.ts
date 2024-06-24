import { Router } from "express";
import { tokenVerify } from "@/helpers/Token";
import { CreateAddress } from "./AddressController";

const router = Router()

router.post('/', tokenVerify, CreateAddress)

export default router