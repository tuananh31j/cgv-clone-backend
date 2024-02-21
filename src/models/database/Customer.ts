import mongoose from 'mongoose';

const Customer = new mongoose.Schema(
    {
        name: { type: String },
        avt: { type: String },
        phone: { type: Number },
        password: { type: String },
        email: { type: String },
        sex: { type: Boolean },
        address: { type: String },
        date_of_birth: { type: String },
        save_password: { type: Boolean },
        status: { type: Boolean },
        member_card_number: { type: String },
        point: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model('Customer', Customer);
