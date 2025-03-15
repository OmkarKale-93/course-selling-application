import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    courseID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})