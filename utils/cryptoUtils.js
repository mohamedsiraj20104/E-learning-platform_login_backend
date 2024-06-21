const crypto = require('crypto');

const hashPassword = (password, salt) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey.toString('hex'));
        });
    });
};

const comparePassword = (enteredPassword, storedPassword, salt) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashedPassword = await hashPassword(enteredPassword, salt);
            resolve(hashedPassword === storedPassword);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { hashPassword, comparePassword };
