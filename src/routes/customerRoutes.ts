import express from 'express';
import customerControllers from '~/controllers/CustomerControllers';
const router = express.Router();

router.patch('/', customerControllers.update);
router.delete('/:id', customerControllers.remove);
router.get('/', customerControllers.get);
router.post('/', customerControllers.add);
router.get('/', customerControllers.getAll);

export default router;
