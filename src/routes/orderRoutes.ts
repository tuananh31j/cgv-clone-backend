import express from 'express';
import orderControllers from '~/controllers/OrderControllers';
const router = express.Router();

router.patch('/', orderControllers.update);
router.delete('/:id', orderControllers.remove);
router.get('/', orderControllers.get);
router.post('/', orderControllers.add);
router.get('/', orderControllers.getAll);

export default router;
