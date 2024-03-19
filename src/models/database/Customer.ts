import mongoose from 'mongoose';

const Customer = new mongoose.Schema(
    {
        name: { type: String },
        avt: { type: String },
        phone: { type: String },
        password: { type: String, required: true },
        email: { type: String },
        sex: { type: Boolean, default: 1 },
        date_of_birth: { type: String },
        status: { type: Boolean, default: true },
        role: { type: String, default: 'user' },
        member_card_number: { type: String },
        point: { type: Number, default: 0 },
        address: { type: String },
        fay_cinema: { type: mongoose.Schema.ObjectId, ref: 'Cinema' },
    },
    { timestamps: true }
);

export default mongoose.model('Customer', Customer);
