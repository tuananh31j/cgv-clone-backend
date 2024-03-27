import express from 'express';
import cors from 'cors';
import database from './models/database';
import routerApi from '~/routes';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
config();
const app = express();
const PORT = process.env.PORT || 5555;
// app.enable('trust proxy');
app.use(
    cors({
        origin: true, // Nguồn gốc được phép
        credentials: true,
        exposedHeaders: ['set-cookie'], // Cho phép gửi cookies/certificates
    })
);
app.use(cookieParser());
database.connect();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use('/api', routerApi);
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
