import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY } from '~/constants/secretKey';

export interface IUserPayload {
    id: Types.ObjectId | string;
    role: string;
    iat?: number;
    epx?: number;
}
const generalAccessToken = (user: IUserPayload | string) => {
    const token = jwt.sign(user, SECRET_ACCESS_KEY, { expiresIn: '2s' });
    return token;
};

const generalRefreshToken = (user: IUserPayload | string) => {
    const token = jwt.sign(user, SECRET_REFRESH_KEY, { expiresIn: '365d' });
    return token;
};

export { generalAccessToken, generalRefreshToken };
