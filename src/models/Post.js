import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
}, { timestamps: true })

// by checking if the model exists then use it, else create it.
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;