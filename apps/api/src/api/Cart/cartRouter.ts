// server/routes/cartRoutes.ts
import { Router } from 'express';
import * as cartController from './cartController'; // Pastikan path ini sesuai dengan struktur proyek Anda

const router = Router();

router.get('/:userId', cartController.getUserCartProducts); // Updated route to fetch user's cart products
router.post('/add', cartController.addToCart);
router.put('/:cartId', cartController.updateCartQuantity);
router.delete('/:cartId', cartController.removeFromCart);

export default router;