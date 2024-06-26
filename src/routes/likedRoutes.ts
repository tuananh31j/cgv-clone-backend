import { Liked } from '~/models/database';
import express from 'express';
import likedControllers from '~/controllers/LikedControllers';
const router = express.Router();

router.patch('/:id', likedControllers.update);
router.delete('/:id', likedControllers.remove);
router.get('/:id', likedControllers.get);
router.post('/', likedControllers.add);
router.get('/', likedControllers.getAll);

export default router;
