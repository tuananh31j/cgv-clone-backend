import { Request, Response } from 'express';
import { Liked } from '~/models/database';
class LikedControllers {
    async getAll(req: Request, res: Response) {
        try {
            const data = await Liked.find();
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getAllByMovieId(req: Request, res: Response) {
        try {
            const movieId = req.query.movie_id;

            const data = await Liked.find({ movie: movieId });
            if (!data) return res.status(400).json('ID không tồn tại!');
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getAllByUserId(req: Request, res: Response) {
        try {
            const userId = req.query.user_id;

            const data = await Liked.find({ movie: userId });
            if (!data) return res.status(400).json('ID không tồn tại!');
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Liked.findById(id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await Liked.findByIdAndDelete(id);
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
            const result = await Liked.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('không tồn tại!');

            return res.status(200).json({ message: 'Cập nhật thành công!', data: result });
        } catch (error) {
            console.log(error);
        }
    }
    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Liked.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new LikedControllers();
