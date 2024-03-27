import { Movie } from '~/models/database';
import { Request, Response } from 'express';

class MovieControllers {
    async getAll(req: Request, res: Response) {
        try {
            const page: number = Number(req.query._page) || 1;
            const limit: number = Number(req.query._limit) || 0;
            const data = await Movie.find()
                .populate('rated_id')
                .skip((page - 1) * limit);
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json('lỗi server!');
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Movie.findById(id);
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json('lỗi server!');
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newData = req.body;
            const data = await Movie.create(newData);
            return res.status(200).json({ message: 'Thêm mới thanh công!', data });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Movie.findByIdAndDelete(id);
            if (!data) return res.status(400).json('Sản phẩm không tồn tại!');
            return res.status(200).json('Xóa thành công!');
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const newData = req.body;
            const id = req.params.id;
            const result = await Movie.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('Không tìm thấy sản phẩm!');

            return res.status(200).json({ mesaage: 'Cập nhật sản phẩm thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Movie.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new MovieControllers();
