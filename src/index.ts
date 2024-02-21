import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import database from './models/database';
import routerApi from '~/routes';
const app = express();
const PORT = 5555;
app.use(cors());
database.connect();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use('/api', routerApi);
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
