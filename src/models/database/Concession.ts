import mongoose from 'mongoose';

const Concession = new mongoose.Schema(
    {
        name: { type: String },
        iamge: { type: String },
        price: { type: Number },
        description: [{ type: String }],
    },
    { timestamps: true }
);

export default mongoose.model('Concession', Concession);
