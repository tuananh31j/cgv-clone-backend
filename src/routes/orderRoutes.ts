import express from 'express';
import orderControllers from '~/controllers/OrderControllers';
const router = express.Router();

router.patch('/:id', orderControllers.update);
router.delete('/:id', orderControllers.remove);
router.get('/:id', orderControllers.get);
router.get('/my-orders/:id', orderControllers.getListMyOrders);
router.get('/seats/:id', orderControllers.getSoldSeatsList);
router.post('/', orderControllers.add);
router.get('/', orderControllers.getAll);

export default router;
