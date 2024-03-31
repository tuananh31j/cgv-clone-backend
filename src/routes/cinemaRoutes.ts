import express from 'express';
import cinemaControllers from '~/controllers/CinemaControllers';
const router = express.Router();

router.get('/getCinemasByRegionID/:id', cinemaControllers.getCinemasByRegionID);
router.patch('/:id', cinemaControllers.update);
router.delete('/:id', cinemaControllers.remove);
router.get('/:id', cinemaControllers.get);
router.post('/', cinemaControllers.add);
router.get('/', cinemaControllers.getAll);

export default router;
