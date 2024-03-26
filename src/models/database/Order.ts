import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const Order = new mongoose.Schema(
    {
        qr_code: { type: String },
        user_name: { type: String },
        movie_name: { type: String },
        start_time: { type: String },
        end_time: { type: String },
        date: { type: String },
        status: { type: String, default: 'active' },
        payment_type: { type: Boolean },
        region_name: { type: String },
        cinema_name: { type: String },
        screening_format_name: { type: String },
        seat_quantity: { type: Number },
        seat_name: [{ type: String }],
        current_seat_price: { type: Number },
        current_concession_price: { type: Number },
        concession_ref: [{ type: ObjectId, ref: 'Concession' }],
        user_ref: { type: ObjectId, ref: 'Customer' },
        region_ref: { type: ObjectId, ref: 'Region' },
        screening_format_ref: { type: ObjectId, ref: 'Screening_format' },
        movie_ref: { type: ObjectId, ref: 'Movie' },
        cinema_ref: { type: ObjectId, ref: 'Cinema' },
        showtime_ref: { type: ObjectId, ref: 'Showtime' },
    },
    { timestamps: true }
);

export default mongoose.model('Order', Order);
