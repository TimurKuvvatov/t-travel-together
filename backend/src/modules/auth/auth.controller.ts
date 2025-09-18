import { Request, Response } from 'express';
import { AuthService } from './auth.service.js';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const { token, user } = await this.authService.login(email, password);
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                maxAge: 24 * 60 * 60 * 1000,
            });
            return res.status(200).json({
                success: true,
                user: {
                    id: user.id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked,
                    blockAfter: user.blockAfter,
                    createdAt: user.createdAt,
                },
            });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message, error });
        }
    }
    async logout(req: Request, res: Response) {
        try {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            });
            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }
    async getMe(req: Request, res: Response) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({ success: false, message: 'User not authenticated' });
            }
            return res.status(200).json({
                success: true,
                user: {
                    id: user.id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked,
                    blockAfter: user.blockAfter,
                    createdAt: user.createdAt,
                },
            });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }
}
