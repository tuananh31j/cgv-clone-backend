import express from 'express';
import screeningFormatControllers from '~/controllers/ScreeningFormatControllers';
const router = express.Router();

router.patch('/:id', screeningFormatControllers.update);
router.delete('/:id', screeningFormatControllers.remove);
router.get('/:id', screeningFormatControllers.get);
router.post('/', screeningFormatControllers.add);
router.get('/', screeningFormatControllers.getAll);

export default router;
