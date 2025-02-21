const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    email:{type:String, required: [true,"email address is required"],unique:true},
    password:{type:String, required:[true, "password is required"]},
    createdAt:{type:Date,default: new Date()}
});

UserSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password,12);
});

module.exports = mongoose.model("User",UserSchema);