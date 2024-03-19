import express from 'express';
import showTimeControllers from '~/controllers/ShowtimeControllers';
const router = express.Router();

router.patch('/:id', showTimeControllers.update);
router.delete('/:id', showTimeControllers.remove);
router.get('/:id', showTimeControllers.get);
router.post('/', showTimeControllers.add);
router.get('/', showTimeControllers.getAll);

export default router;
