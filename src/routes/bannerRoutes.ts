import express from 'express';
import bannerControllers from '~/controllers/BannerControllers';
const router = express.Router();

router.get('/banners-active', bannerControllers.getBannerActive);
router.patch('/:id', bannerControllers.update);
router.delete('/:id', bannerControllers.remove);
router.get('/:id', bannerControllers.get);
router.post('/', bannerControllers.add);
router.get('/', bannerControllers.getAll);

export default router;
