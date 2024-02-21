import { boolean } from 'joi';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const Showtime = new mongoose.Schema(
    {
        date: { type: String },
        start_time: { type: String },
        end_time: { type: String },
        region: { type: ObjectId, ref: 'Region' },
        re_showing: { type: Boolean },
        price: { type: Number },
        cinema: { type: ObjectId, ref: 'Cinema' },
        screening_format: { type: ObjectId, ref: 'Screening_format' },
        movie: { type: ObjectId, ref: 'Movie' },
    },
    { timestamps: true }
);

export default mongoose.model('Showtime', Showtime);
