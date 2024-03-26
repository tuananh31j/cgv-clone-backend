import { addDays, startOfDay } from 'date-fns';
import { Request, Response } from 'express';
import { Showtime, Theater } from '~/models/database';
class ShowtimeControllers {
    async getAll(req: Request, res: Response) {
        try {
            const data = await Showtime.find()
                .populate({
                    path: 'theater',
                    populate: [{ path: 'format' }, { path: 'region' }],
                })
                .populate({ path: 'movie', populate: 'rated_id' })
                .populate('cinema');

            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async getMoviesNowShowing(req: Request, res: Response) {
        try {
            const today = startOfDay(new Date());
            const thirtyDaysLater = addDays(today, 30);

            const data = await Showtime.aggregate([
                { $match: { date: { $gte: today, $lte: thirtyDaysLater } } },
                { $group: { _id: '$movie', date: { $min: '$date' } } },
                {
                    $lookup: {
                        from: 'movies',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'movieDetails',
                    },
                },
                { $unwind: '$movieDetails' },
            ]);
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
    async getMoviesComingSoon(req: Request, res: Response) {
        try {
            const today = startOfDay(new Date());
            const thirtyDaysLater = addDays(today, 30);
            const data = await Showtime.aggregate([
                { $match: { date: { $gt: thirtyDaysLater } } },
                { $group: { _id: '$movie', date: { $min: '$date' } } },
                {
                    $lookup: {
                        from: 'movies',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'movieDetails',
                    },
                },
                { $unwind: '$movieDetails' },
                { $project: { movieDetails: 1, date: 1 } },
            ]);
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async getListShowtimeByMovieId(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const today = startOfDay(new Date());
            const thirtyDaysLater = addDays(today, 30);
            const data = await Showtime.find({ movie: id, date: { $gte: today, $lte: thirtyDaysLater } })
                .populate({
                    path: 'theater',
                    populate: [{ path: 'format' }, { path: 'region' }],
                })
                .populate({ path: 'movie', populate: 'rated_id' })
                .populate('cinema');

            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = await Showtime.findById(id).populate('theater').populate('movie').populate('cinema');
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await Showtime.findByIdAndDelete(id);
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
            const result = await Showtime.findByIdAndUpdate(id, newData);

            if (!result) return res.status(400).json('không tồn tại!');

            return res.status(200).json({ message: 'Cập nhật thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newData = req.body;
            const result = await Showtime.create(newData);

            return res.status(200).json({ message: 'Thêm thành công!', data: result });
        } catch (error) {
            res.status(500).json({ message: 'loi server', error });
        }
    }
}

export default new ShowtimeControllers();
