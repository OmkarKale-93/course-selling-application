import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true    
    },
    video: {
        type: String,
        required: true
    },
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    });

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;