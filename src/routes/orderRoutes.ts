import express from 'express';
import orderControllers from '~/controllers/OrderControllers';
const router = express.Router();

router.patch('/:id', orderControllers.update);
router.delete('/:id', orderControllers.remove);
router.get('/:id', orderControllers.get);
router.post('/', orderControllers.add);
router.get('/', orderControllers.getAll);

export default router;
