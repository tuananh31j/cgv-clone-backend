import mongoose from 'mongoose';
const Refresh_token = new mongoose.Schema({
    token: [{ type: String }],
});

export default mongoose.model('Refresh_token', Refresh_token);
