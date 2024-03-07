import { ObjectId } from 'mongoose';
import { Customer } from '~/models/database';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY } from '~/constants/secretKey';
import { IUserPayload, generalAccessToken, generalRefreshToken } from '~/utilities/jwt';
import { Types } from 'mongoose';
import { ICustomer } from '~/interface/Customer';
const refreshTokens: string[] = [];
class AuthControllers {
    async login(req: Request, res: Response) {
        try {
            const { email } = req.body;
            const user = await Customer.findOne({ email });
            if (!user) return res.status(400).json({ message: { email: 'Email khong ton tai!' } });

            const isPassword = await bcrypt.compare(req.body.password, user.password);

            if (!isPassword) return res.status(400).json({ message: { password: 'Mat kkhau sai' } });

            if (user && isPassword) {
                const accessToken = generalAccessToken({ id: user._id, role: user.role });
                const refreshToken = generalRefreshToken({ id: user._id, role: user.role });
                refreshTokens.push(refreshToken);
                const { name, role } = user.toObject() as ICustomer;
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: 'strict',
                });
                res.status(200).json({ name, role, accessToken });
            }
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async register(req: Request, res: Response) {
        try {
            const { email, phone, password: pass } = req.body;

            const checkEmail = await Customer.findOne({ email });
            const checkPhone = await Customer.findOne({ phone });

            if (checkPhone) return res.status(400).json({ message: { email: '', phone: 'Sốt điện thoại tồn tại!' } });

            if (checkEmail) return res.status(400).json({ message: { email: 'Email đã tồn tại!', phone: '' } });

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(pass, salt);

            const newUser = await Customer.create({ ...req.body, password: hashed });
            const { password, ...others } = newUser.toObject() as ICustomer;
            console.log(newUser);
            console.log(await Customer.create({ ...req.body, password: hashed }));

            return res.status(200).json({ message: 'Đăng ký thành công!', data: others });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async requestRefreshToken(req: Request, res: Response) {
        try {
            const refreshToken = req.cookies['refreshToken'];
            console.log(refreshToken);

            if (!refreshToken) return res.status(403).json('Ban chua dang nhap!');
            const isYourToken = refreshTokens.includes(refreshToken);
            if (!isYourToken) return res.status(403).json('refreshToken khong dung!');

            jwt.verify(
                refreshToken,
                SECRET_REFRESH_KEY,
                (err: null | jwt.VerifyErrors, user: undefined | jwt.JwtPayload | string) => {
                    if (err) return res.status(401).json('Token da het han!');
                    if (user) {
                        const { id, role } = user as JwtPayload;
                        const newRefreshToken = generalRefreshToken({ id, role });
                        const newAccessToken = generalAccessToken({ id, role });
                        refreshTokens.push(newRefreshToken);
                        res.cookie('refreshToken', newRefreshToken, {
                            httpOnly: true,
                            secure: false,
                            path: '/',
                            sameSite: 'strict',
                        });
                        res.status(200).json({ accessToken: newAccessToken });
                    }
                }
            );
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async logout(req: Request, res: Response) {
        try {
            refreshTokens.filter((item) => item !== req.cookies['refreshToken']);
            res.clearCookie('refreshToken').status(200).json('Logged out!');
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async getMe(req: Request, res: Response) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (token) {
                jwt.verify(token, SECRET_ACCESS_KEY, async (err, user) => {
                    if (err) return res.status(401).json({ message: 'token khong hop le!' });
                    const copyUser = JSON.parse(JSON.stringify(user));
                    const currentUser = await Customer.findById(copyUser?.id);
                    res.status(200).json(currentUser);
                });
            } else {
                res.status(400).json('bạn chưa đăng nhập!');
            }
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new AuthControllers();
