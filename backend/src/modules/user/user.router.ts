import { Router } from 'express';
import { UserController } from './user.controller.js';

const UserRouter = Router();

const userController = new UserController();

UserRouter.get('/', async (req, res) => {
    await userController.getAll(req, res);
});

UserRouter.get('/:id', async(req, res) => {
    await userController.getById(req, res);
})

UserRouter.post('/', async (req, res) => {
    await userController.create(req, res);
});

UserRouter.delete('/:id', async (req, res) => {
    await userController.delete(req, res);
});

UserRouter.put('/:id/block', async (req, res) => {
    await userController.block(req, res);
});

UserRouter.put('/:id/unblock', async (req, res) => {
    await userController.unblock(req, res);
});

UserRouter.put('/:id/set-admin', async (req, res) => {
    await userController.setAdmin(req, res);
});

UserRouter.put('/:id/unset-admin', async (req, res) => {
    await userController.unsetAdmin(req, res);
});

UserRouter.put('/:id/reset-password', async (req, res) => {
    await userController.resetPassword(req, res);
});

export default UserRouter;
