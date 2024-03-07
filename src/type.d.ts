import { JwtPayload } from 'jsonwebtoken';

// express.d.ts
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | string;
        }
    }
}

export {};
