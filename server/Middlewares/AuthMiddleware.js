const User = require('../Models/Model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.UserVerification = async (req, res) => {
    const token = req.cookies.token;

    // If no token is found, return false
    if (!token) {
        return res.json({ status: false, message: "No token provided" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        // Find the user in the database
        const user = await User.findById(decoded.id);

        // If user not found, return false
        if (!user) {
            return res.json({ status: false, message: "User not found" });
        }

        // If everything is okay, return true and user data (optional)
        return res.json({ status: true, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error(err);
    }
};