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


export default UserRouter;
