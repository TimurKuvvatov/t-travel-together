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
}
