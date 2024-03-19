import express from 'express';
import concessionController from '~/controllers/Concession';
const router = express.Router();

router.patch('/:id', concessionController.update);
router.delete('/:id', concessionController.remove);
router.get('/:id', concessionController.get);
router.post('/', concessionController.add);
router.get('/', concessionController.getAll);

export default router;
