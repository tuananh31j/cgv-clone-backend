import { config } from 'dotenv';

config();

const SECRET_ACCESS_KEY = process.env.JWT_ACCESS_KEY || 'accessKey';

const SECRET_REFRESH_KEY = process.env.JWT_REFRESH_KEY || 'freshKey';

export { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY };
