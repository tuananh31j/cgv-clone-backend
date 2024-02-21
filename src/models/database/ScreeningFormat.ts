import mongoose from 'mongoose';

const ScreeningFormat = new mongoose.Schema(
    {
        name: { type: String },
        thumbnail: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('ScreeningFormat', ScreeningFormat);
