import mongoose from 'mongoose';

const Cinema = new mongoose.Schema(
    {
        name: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('Cinema', Cinema);
