import express from 'express';
import ratedControllers from '~/controllers/RatedControllers';
const router = express.Router();

router.patch('/:id', ratedControllers.update);
router.delete('/:id', ratedControllers.remove);
router.get('/:id', ratedControllers.get);
router.post('/', ratedControllers.add);
router.get('/', ratedControllers.getAll);

export default router;
