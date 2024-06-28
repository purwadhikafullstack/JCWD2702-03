// server/routes/cartRoutes.ts
import { Router } from 'express';
import * as orderController from './OrderControler'; 

const router = Router();
router.get('/orders', orderController.showAllOrders);
router.post('/orders/confirm-payment', orderController.confirmPayment);
router.post('/orders/send', orderController.sendUserOrder);
router.post('/orders/cancel', orderController.cancelUserOrder);

module.exports = router;