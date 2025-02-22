const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId, ref: "User", required:true},
    title : {type:String, required:true},
    link : {type:String, required:true},
    learnings : {type:String, required:true},
    tags:{type:[String]},
    notes : {type:String},
    createdAt : {type:Date,default:Date.now},
})

module.exports = mongoose.model("Question", QuestionSchema)