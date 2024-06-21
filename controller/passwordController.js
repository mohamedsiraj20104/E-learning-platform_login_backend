// backend/controllers/passwordController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);

    if (user && (await user.comparePassword(oldPassword))) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();
        res.json({ message: 'Password updated successfully' });
    } else {
        res.status(400);
        throw new Error('Old password is incorrect');
    }
};

module.exports = { changePassword };
