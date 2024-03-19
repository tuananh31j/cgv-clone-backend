import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const Theater = new mongoose.Schema(
    {
        name: { type: String },
        colums: { type: Number },
        rows: { type: Number },
        region: { type: ObjectId, ref: 'Region' },
        cinema: { type: ObjectId, ref: 'Cinema' },
        format: { type: ObjectId, ref: 'ScreeningFormat' },
    },
    { timestamps: true }
);

export default mongoose.model('Theater', Theater);
