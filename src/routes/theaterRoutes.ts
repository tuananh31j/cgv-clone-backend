import express from 'express';
import theaterControllers from '~/controllers/TheaterControllers';
const router = express.Router();

router.patch('/:id', theaterControllers.update);
router.delete('/:id', theaterControllers.remove);
router.get('/:id', theaterControllers.get);
router.post('/', theaterControllers.add);
router.get('/', theaterControllers.getAll);

export default router;
