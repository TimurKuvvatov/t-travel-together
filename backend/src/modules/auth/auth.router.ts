import { Router } from 'express';
import { AuthController } from './auth.controller.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js';

const AuthRouter = Router();

const authController = new AuthController();

AuthRouter.post('/auth/login', async (req, res) => {
    await authController.login(req, res);
});

AuthRouter.post('/auth/logout', async (req, res) => {
    await authController.logout(req, res);
});

AuthRouter.get('/auth/me', authMiddleware, async (req, res) => {
    await authController.getMe(req, res);
});

export default AuthRouter;
