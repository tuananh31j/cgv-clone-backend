import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const Liked = new mongoose.Schema(
    {
        user: { type: ObjectId, ref: 'Customer' },
        movie: { type: ObjectId, ref: 'Movie' },
    },
    { timestamps: true }
);

export default mongoose.model('Liked', Liked);
