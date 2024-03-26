import express from 'express';
import showTimeControllers from '~/controllers/ShowtimeControllers';
const router = express.Router();

router.get('/movies-now-showing', showTimeControllers.getMoviesNowShowing);
router.get('/movies-coming-soon', showTimeControllers.getMoviesComingSoon);
router.get('/movies/:id', showTimeControllers.getListShowtimeByMovieId);
router.route('/:id').patch(showTimeControllers.update).delete(showTimeControllers.remove).get(showTimeControllers.get);
router.route('/').post(showTimeControllers.add).get(showTimeControllers.getAll);

export default router;
