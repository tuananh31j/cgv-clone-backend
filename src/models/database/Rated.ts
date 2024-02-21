import mongoose from 'mongoose';

const Rated = new mongoose.Schema(
    {
        name: { type: String },
        icon: { type: String },
        description: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('Rated', Rated);
