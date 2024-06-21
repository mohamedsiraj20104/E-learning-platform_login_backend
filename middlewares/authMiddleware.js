const User = require('../models/User');

const protect = async (req, res, next) => {
    if (req.session.userId) {
        try {
            req.user = await User.findById(req.session.userId).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no session' });
    }
};

module.exports = { protect };
