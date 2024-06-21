const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.get('/profile', protect, (req, res) => {
    console.log(req.user._id, "profile")
    console.log(req.user.username, "profile")
    res.json({
        _id: req.user._id,
        username: req.user.username,
        email: req.user.email,
    });
});

module.exports = router;
