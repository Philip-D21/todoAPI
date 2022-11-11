const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
     _id:{
        type: Number,
        required: true,
     },
     title:{
        type: String,
        required: true,
     },
     description:{
        type: String,
        required: true,
     },
    },
     { timestamp: true });


     module.exports = mongoose.model("Todo",todoSchema);