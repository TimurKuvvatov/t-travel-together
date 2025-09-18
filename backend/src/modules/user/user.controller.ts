import { Request, Response } from 'express';
import { UserService } from './user.service.js';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    private validateId(req: Request) {
        const { id } = req.params;
        if (!id) {
            throw new Error('User ID is not defined');
        }
        return id;
    }

    async getById(req: Request, res: Response) {
        try {
            const id = this.validateId(req);
            const user = await this.userService.getById(id);
            return res.status(200).json({ success: true, user: user });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await this.userService.getAll();

            return res.status(200).json({ users });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw new Error('Email or password is not defined');
            }

            const user = await this.userService.create(email, password);

            return res.status(201).json({
                success: true,
                user: user,
            });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message, error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = this.validateId(req);

            const user = await this.userService.delete(id);

            return res.status(200).json({ success: true, user: user });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async block(req: Request, res: Response) {
        try {
            const id = this.validateId(req);

            const days = req.body.days ? parseInt(req.body.days, 10) : undefined;

            await this.userService.block(id, days);

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async unblock(req: Request, res: Response) {
        try {
            const id = this.validateId(req);

            await this.userService.unblock(id);

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async setAdmin(req: Request, res: Response) {
        try {
            const id = this.validateId(req);

            await this.userService.setAdmin(id);

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async unsetAdmin(req: Request, res: Response) {
        try {
            const id = this.validateId(req);

            await this.userService.unsetAdmin(id);

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    async resetPassword(req: Request, res: Response) {
        try {
            const { password } = req.body;
            const id = this.validateId(req);
            if (!password) {
                throw new Error('Password is not defined');
            }
            await this.userService.resetPassword(id, password);
            return res.status(200).json({
                success: true,
            });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }
}
