import mongoose, { model } from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFiles: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const postMessage = mongoose.model('PostMessage',postSchema);

