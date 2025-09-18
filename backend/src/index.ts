import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';

dotenv.config();

import { startBlockUsersTask } from './modules/user/blockUsers.task.js';

const staticPath = path.join(process.cwd(), 'public');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: ['https://interviews.effective.land', 'http://localhost:5173'],
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        credentials: true,
        optionsSuccessStatus: 200,
        preflightContinue: false,
    }),
);
app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static(staticPath));
app.use(router);

startBlockUsersTask();

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});
