import express from 'express';
import authControllers from '~/controllers/AuthControllers';
const router = express.Router();

router.post('/login', authControllers.login);
router.post('/register', authControllers.register);
router.post('/me', authControllers.getMe);
router.post('/refresh', authControllers.requestRefreshToken);
router.post('/logout', authControllers.logout);

export default router;
