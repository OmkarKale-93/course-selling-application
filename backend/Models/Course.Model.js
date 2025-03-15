import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        default: 0,
        min: 0,
        max: 5

    },
    numReviews: {
        type: Number,
        default: 0

    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    
},{
    timestamps: true

});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;