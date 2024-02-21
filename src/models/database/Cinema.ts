import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const Cinema = new mongoose.Schema(
    {
        name: { type: String },
        region: { type: ObjectId, ref: 'Region' },
        screening_format: { type: ObjectId, ref: 'ScreeningFormat' },
        colums: { type: Number },
        rows: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model('Cinema', Cinema);
