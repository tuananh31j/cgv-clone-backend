import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const Showtime = new mongoose.Schema(
    {
        date: { type: Date },
        start_time: { type: Date },
        end_time: { type: Date },
        re_showing: { type: Boolean },
        price: { type: Number },
        theater: { type: ObjectId, ref: 'Theater' },
        movie: { type: ObjectId, ref: 'Movie' },
        cinema: { type: ObjectId, ref: 'Cinema' },
    },
    { timestamps: true }
);

export default mongoose.model('Showtime', Showtime);
