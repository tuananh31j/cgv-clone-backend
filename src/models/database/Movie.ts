import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const Schema = mongoose.Schema;
const Movie = new Schema(
    {
        name: { type: String },
        thumbnail: { type: String },
        author: { type: String },
        actors: { type: String },
        categories: { type: String },
        show_duration: { type: Number },
        rated_id: { type: ObjectId, ref: 'Rated' },
        liked: { type: Number, default: 0 },
        description: { type: String },
        trailer_embed: { type: String },
        language: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('Movie', Movie);
