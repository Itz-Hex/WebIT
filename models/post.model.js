const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    tags: {
        type: [String],
        required: true,
        default: []
    },
    headerImageUrl: {
        type: String,
        required: true,
        default: "https://picsum.photos/1200/600"
    },
    potd: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema)
module.exports = Post;
