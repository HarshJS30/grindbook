require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) =>{
    return jwt.sign({id},process.env.TOKEN_KEY,{
        expiresIn:3*2460*60*60,
    });
}