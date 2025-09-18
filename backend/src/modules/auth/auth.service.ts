import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import prisma from '../../prisma/client.js';

dotenv.config();

export class AuthService {
    async login(email: string, password: string) {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined');

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new Error('Invalid email');

        if (!user.passwordHash) throw new Error('User cannot login with password');

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) throw new Error('Invalid password');

        if (user.isBlocked) throw new Error('User is blocked');

        const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, JWT_SECRET, {
            expiresIn: '24h',
        });

        return { token, user };
    }
}
