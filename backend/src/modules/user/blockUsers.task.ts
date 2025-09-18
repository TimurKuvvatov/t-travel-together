import cron from 'node-cron';
import { BlockUsersCronService } from './blockUsers.cron.service.js';

const blockUsersCronService = new BlockUsersCronService();

export const startBlockUsersTask = () => {
    cron.schedule('0 * * * *', async () => {
        try {
            await blockUsersCronService.blockUsers();
        }
        catch (error) {
            console.error({message: (error as Error).message})
        }
    })
}