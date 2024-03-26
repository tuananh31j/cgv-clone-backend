import mongoose from 'mongoose';

const Cinema = new mongoose.Schema(
    {
        name: { type: String },
        region_ref: { type: mongoose.Schema.ObjectId, ref: 'Region' },
    },
    { timestamps: true }
);

export default mongoose.model('Cinema', Cinema);
