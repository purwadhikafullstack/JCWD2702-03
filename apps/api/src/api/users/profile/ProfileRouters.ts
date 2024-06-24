import { Router } from "express";
import { createProfile, updateProfileImages } from "./ProfileControllers";
import { uploader } from "@/middleware/Uploader/UploaderProfile";
import { tokenVerify } from "@/helpers/Token";

const router = Router()

router.post('/', tokenVerify, uploader, createProfile)
router.put('/update', tokenVerify, uploader, updateProfileImages)

export default router