import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { SECRET_ACCESS_KEY } from '~/constants/secretKey';

class CheckToken {
    verifyUser(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (token) {
                jwt.verify(token, SECRET_ACCESS_KEY, (err, user) => {
                    if (err) return res.status(401).json({ message: 'Token không hợp lệ!' });
                    req.user = user;
                    next();
                });
            }
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    verifyAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.user as JwtPayload;
            if (user.role === 'admin' || user.id === req.params.id) {
                return next();
            } else {
                return res.status(403).json({ message: 'ban ko phai admin!' });
            }
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new CheckToken();
