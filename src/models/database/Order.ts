import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const Order = new mongoose.Schema(
    {
        ticket_qr: { type: String },
        user_name: { type: String },
        movie_name: { type: String },
        start_time: { type: String },
        end_time: { type: String },
        date: { type: String },
        region_name: { type: String },
        cinema_name: { type: String },
        screening_format_name: { type: String },
        seat_quantity: { type: Number },
        concession_quantity: { type: Number },
        current_showtime_price: { type: Number },
        current_concession_price: { type: Number },
        user_ref: { type: ObjectId, ref: 'Customer' },
        region_ref: { type: ObjectId, ref: 'Region' },
        screening_format_ref: { type: ObjectId, ref: 'Screening_format' },
        movie_ref: { type: ObjectId, ref: 'Movie' },
        cinema_ref: { type: ObjectId, ref: 'Cinema' },
    },
    { timestamps: true }
);

export default mongoose.model('Order', Order);
