import prisma from '../../prisma/client.js';

export class BlockUsersCronService {
    async blockUsers() {
        const now = new Date();

        const users = await prisma.user.findMany({
            where: {
                isBlocked: false,
                blockAfter: {
                    lte: now,
                },
            },
        });

        if (users.length === 0) {
            return;
        }

        await Promise.all(
            users.map((user) =>
                prisma.user.update({
                    where: { id: user.id },
                    data: { isBlocked: true },
                }),
            ),
        );
    }
}
