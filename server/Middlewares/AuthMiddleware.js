const User = require('../Models/Model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.UserVerification = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.json({ status: false, message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.json({ status: false, message: "User not found" });
        }
        return res.json({ status: true, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error(err);
    }
};