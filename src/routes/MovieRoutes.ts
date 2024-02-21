import express from 'express';
import movieControllers from '~/controllers/MovieControllers';
const router = express.Router();

router.patch('/:id', movieControllers.update);
router.delete('/:id', movieControllers.remove);
router.get('/', movieControllers.get);
router.post('/', movieControllers.add);
router.get('/', movieControllers.getAll);

export default router;
