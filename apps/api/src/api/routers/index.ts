import express, { Router } from 'express';

const router = Router();
router.use(express.json());
router.use('*/image', express.static('src/public/image'));

export default router;
