const User = require('../Models/Model');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcryptjs');

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json("Email already signed Up");
        }
        const user = await User.create({
            email,
            password,
            createdAt
        });

        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User signed in successfully!", success: true, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during signup." }); // Send error response
    }
};

module.exports.Login = async(req,res,next)=>{
    try{
        const{email,password} = req.body;
        if(!email || !password){
            return res.json({message:"All fields required!"})
        }
        const user = await User.findOne({email});
        if (!user){
            return res.json({messsage:"Email not registered yet!"});
        }
        const auth = await bcrypt.compare(password,user.password)
        if(!auth){
            return res.json({message:"Password didnt match"})
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred during login." });
    }
}