import { Request, Response } from 'express';
import { Region } from '~/models/database';
class RegionControllers {
    async getAll(req: Request, res: Response) {
        try {
            const data = await Region.find();
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Region.findById(id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await Region.findByIdAndDelete(id);
            if (!result) return res.status(400).json('Không tồn tại!');

            return res.status(200).json('Xóa thành công!');
        } catch (error) {
            console.log(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const newData = req.body;
            const result = await Region.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('không tồn tại!');

            return res.status(200).json({ message: 'Cập nhật thành công!', data: result });
        } catch (error) {
            console.log(error);
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Region.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new RegionControllers();
