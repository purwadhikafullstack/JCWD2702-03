import { Router } from "express";
import { tokenVerify } from "@/helpers/Token";
import { CreateAddress, deleteAddress, getAddress, setMainAddress } from "./AddressController";

const router = Router()

router.post('/', tokenVerify, CreateAddress)
router.get('/', tokenVerify, getAddress)
router.patch('/', tokenVerify, deleteAddress)
router.patch('/main', tokenVerify, setMainAddress)

export default router