import { Request, Response } from 'express';
import { Rated } from '~/models/database';
class RatedControllers {
    async getAll(req: Request, res: Response) {
        try {
            const data = await Rated.find();
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Rated.findById(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await Rated.findByIdAndDelete(id);
            if (!result) return res.status(400).json('Không tồn tại!');

            return res.status(200).json('Xóa thành công!');
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const newData = req.body;
            const result = await Rated.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('Sản phẩm không tồn tại!');

            return res.status(200).json({ message: 'Cập nhật sản phẩm thành cồng!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Rated.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new RatedControllers();
