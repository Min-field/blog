import mongoose, { Schema } from 'mongoose'

const PostSchema = {
    name: {
        type: String
    },
    date: {
        type: Date
    },
    title: {
        type: String
    },
    post: {
        type: String
    }
}

const Post = mongoose.model('Post', PostSchema)

export default Post