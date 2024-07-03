import { Router } from "express";
import { tokenVerify } from "@/helpers/Token";
import { CreateAddress } from "./AddressController";

const router = Router()

router.post('/', tokenVerify, CreateAddress)
// router.get('/province', tokenVerify, getProvince)
// router.get('/city', tokenVerify, getCity)

export default router