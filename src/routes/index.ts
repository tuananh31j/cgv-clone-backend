import express from 'express';

import routerMovie from './MovieRoutes';
import routerRated from './ratedRoutes';
import routerFormat from './screeningFormatRoutes';
import routerRegion from './regionRoutes';
import routerLiked from './likedRoutes';
import routerCustomer from './customerRoutes';
import routerOrder from './orderRoutes';
import routerCinema from './cinemaRoutes';
import routerTheater from './theaterRoutes';
import routerAuth from './authRoutes';
import routerShowtime from './showtimeRoutes';
import routerConcession from './concessionRoutes';
import routerBanner from './bannerRoutes';

const router = express.Router();

router.use('/movies', routerMovie);
router.use('/rateds', routerRated);
router.use('/showtimes', routerShowtime);
router.use('/formats', routerFormat);
router.use('/regions', routerRegion);
router.use('/likes', routerLiked);
router.use('/customers', routerCustomer);
router.use('/orders', routerOrder);
router.use('/cinemas', routerCinema);
router.use('/theaters', routerTheater);
router.use('/concessions', routerConcession);
router.use('/banners', routerBanner);
router.use('/auth', routerAuth);

export default router;
