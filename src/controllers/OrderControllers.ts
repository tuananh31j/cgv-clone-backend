import { Request, Response } from 'express';
import { Order } from '~/models/database';
class OrderControllers {
    async getAll(req: Request, res: Response) {
        try {
            const data = await Order.find();
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
    async getSoldSeatsList(req: Request, res: Response) {
        try {
            const showtimeId = req.params.id;
            const data: { _id: string; seat_name: string[] }[] = await Order.find(
                { showtime_ref: showtimeId },
                { seat_name: 1 }
            );
            const soldSeatsList = data.reduce((arr, item) => {
                return arr.concat(item.seat_name);
            }, [] as string[]);
            res.status(201).json(soldSeatsList);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
    async getListMyOrders(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Order.find({ user_ref: id }).populate('movie_ref');
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Order.findById(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await Order.findByIdAndDelete(id);
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
            const result = await Order.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('không tồn tại!');

            return res.status(200).json({ message: 'Cập nhật thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Order.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new OrderControllers();
