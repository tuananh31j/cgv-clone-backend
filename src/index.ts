import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import database from './models/database';
import routerApi from '~/routes';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = 5555;
app.use(
    cors({
        origin: 'http://localhost:3100', // Nguồn gốc được phép
        credentials: true, // Cho phép gửi cookies/certificates
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
