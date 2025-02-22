// AuthVerification.js
const User = require('../Models/Model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const UserVerification = async (req, res) => {
    try {
        const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ status: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ status: false, message: "User not found" });
        }

        return res.json({ status: true, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error("Token verification error:", err);
        return res.status(500).json({ status: false, message: "Server error" });
    }
};

module.exports = { UserVerification };