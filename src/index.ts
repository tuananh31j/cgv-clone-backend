import express from 'express';
import cors from 'cors';
import database from './models/database';
import routerApi from '~/routes';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
config();
const corsOptions = {
    origin: 'https://cgv-clone-frontend.vercel.app', // Cho phép truy cập từ domain này
    credentials: true, // Cho phép gửi cookie qua CORS
    allowedHeaders: 'Content-Type,Authorization', // Header được phép
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Phương thức được phép
};
const app = express();
const PORT = process.env.PORT || 5555;
app.use(cookieParser());
app.use(cors(corsOptions));
database.connect();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use('/api', routerApi);
app.listen(PORT, () => console.log(`Server is running`));
