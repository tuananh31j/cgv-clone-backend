import express from 'express';
import cinemaControllers from '~/controllers/CinemaControllers';
const router = express.Router();

router.patch('/', cinemaControllers.update);
router.delete('/:id', cinemaControllers.remove);
router.get('/', cinemaControllers.get);
router.post('/', cinemaControllers.add);
router.get('/', cinemaControllers.getAll);

export default router;
