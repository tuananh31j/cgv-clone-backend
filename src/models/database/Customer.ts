import mongoose from 'mongoose';

const Customer = new mongoose.Schema(
    {
        name: { type: String },
        fay_cinema: { type: String },
        avt: { type: mongoose.Schema.ObjectId, ref: 'Cinema' },
        phone: { type: String },
        password: { type: String, required: true },
        email: { type: String },
        sex: { type: Boolean, default: 1 },
        address: { type: String },
        date_of_birth: { type: String },
        save_password: { type: Boolean },
        status: { type: Boolean, default: true },
        role: { type: String, default: 'user' },
        member_card_number: { type: String },
        point: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default mongoose.model('Customer', Customer);
