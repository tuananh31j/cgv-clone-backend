import { Request, Response } from 'express';
import { Customer } from '~/models/database';
class CustomerControllers {
    async getAll(req: Request, res: Response) {
        try {
            const data = await Customer.find();
            return res.status(200).json({ message: 'ok', data });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Customer.findById(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await Customer.findByIdAndDelete(id);
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
            const result = await Customer.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('không tồn tại!');

            return res.status(200).json({ message: 'Cập nhật thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Customer.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new CustomerControllers();
