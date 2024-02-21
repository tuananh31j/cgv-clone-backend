import mongoose from 'mongoose';

const Region = new mongoose.Schema(
    {
        name: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('Region', Region);
