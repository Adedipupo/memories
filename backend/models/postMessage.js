import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const PostMessage = mongoose.model('PostMessage', postSchema);

