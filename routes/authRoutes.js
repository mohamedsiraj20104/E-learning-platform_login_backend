// routes/authRoutes.js

const express = require('express');
const { registerUser, verifyOTP, authUser, logoutUser } = require('../controller/authController');
const { validateRegister, validateLogin } = require('../middlewares/validation');
const limiter = require('../middlewares/rateLimiter');
const { protect } = require('../middlewares/authMiddleware');
const csurf = require('csurf');  // Import csurf middleware
const router = express.Router();

// Log CSRF token for debugging
router.use((req, res, next) => {
    console.log('CSRF Token:', req.csrfToken());
    next();
});

router.post('/register', limiter, validateRegister, registerUser);
router.post('/verify-otp', limiter, verifyOTP);
router.post('/login', limiter, csurf({ cookie: true }), validateLogin, authUser);
router.post('/logout', limiter, logoutUser);

router.get('/test', (req, res) => {
    res.send('Test route');
});

module.exports = router;
