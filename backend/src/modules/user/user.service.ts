import bcrypt from 'bcrypt';
import prisma from '../../prisma/client.js';

export class UserService {
    async getById(id: string) {
        const user = await prisma.user.findUnique({
            where: { id },
            include: { interviews: { include: { user: true }, orderBy: { createdAt: 'desc' } } },
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async getAll() {
        return prisma.user.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: { interviews: { include: { user: true }, orderBy: { createdAt: 'desc' } } },
        });
    }

    async delete(id: string) {
        await this.getById(id);
        return prisma.user.delete({
            where: {
                id,
            },
        });
    }

    async create(email: string, password: string) {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }
        const passwordHash = await bcrypt.hash(password, 10);

        return prisma.user.create({
            data: {
                email,
                passwordHash,
            },
        });
    }

    async block(id: string, days?: number) {
        await this.getById(id);

        if (days && days > 0) {
            const now = Date.now();
            await prisma.user.update({
                where: { id },
                data: {
                    blockAfter: new Date(now + days * 24 * 60 * 60 * 1000),
                    isBlocked: false,
                },
            });
        } else {
            await prisma.user.update({
                where: { id },
                data: { isBlocked: true, blockAfter: null },
            });
        }
    }

    async unblock(id: string) {
        await this.getById(id);

        await prisma.user.update({ where: { id }, data: { isBlocked: false, blockAfter: null } });
    }

    async resetPassword(id: string, password: string) {
        const passwordHash = await bcrypt.hash(password, 10);

        await this.getById(id);

        await prisma.user.update({
            where: { id },
            data: { passwordHash },
        });
    }

    async setAdmin(id: string) {
        const user = await this.getById(id);

        if (user.isAdmin) {
            return;
        }

        await prisma.user.update({ where: { id }, data: { isAdmin: true } });
    }

    async unsetAdmin(id: string) {
        const user = await this.getById(id);
        if (!user.isAdmin) {
            return;
        }
        await prisma.user.update({ where: { id }, data: { isAdmin: false } });
    }
}
