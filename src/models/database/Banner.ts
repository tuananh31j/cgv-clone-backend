import mongoose from 'mongoose';

const Banner = new mongoose.Schema(
    {
        name: { type: String },
        image: { type: String },
        status: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model('Banner', Banner);
