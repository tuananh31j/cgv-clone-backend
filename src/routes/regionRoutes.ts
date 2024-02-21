import express from 'express';
import regionControllers from '~/controllers/RegionControllers';
const router = express.Router();

router.patch('/', regionControllers.update);
router.delete('/:id', regionControllers.remove);
router.get('/', regionControllers.get);
router.post('/', regionControllers.add);
router.get('/', regionControllers.getAll);

export default router;
