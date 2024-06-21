// Adding a debug log in middlewares/ratelimiter.js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 1000, // 1 second
    max: 100, // limit each IP to 100 requests per windowMs
    handler: (req, res) => {
        console.log(`Rate limit exceeded for IP: ${req.ip}`);  // Debug log
        res.status(429).json({
            message: 'Too many requests from this IP, please try again after a second',
        });
    },
});

module.exports = limiter;
