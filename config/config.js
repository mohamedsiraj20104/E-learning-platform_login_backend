require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    rateLimitWindowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, // 15 minutes
    rateLimitMax: process.env.RATE_LIMIT_MAX || 100, // limit each IP to 100 requests per windowMs
};
