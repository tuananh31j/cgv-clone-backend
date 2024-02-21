import express from 'express';
import ratedControllers from '~/controllers/RatedControllers';
const router = express.Router();

router.patch('/', ratedControllers.update);
router.delete('/:id', ratedControllers.remove);
router.get('/', ratedControllers.get);
router.post('/', ratedControllers.add);
router.get('/', ratedControllers.getAll);

export default router;
