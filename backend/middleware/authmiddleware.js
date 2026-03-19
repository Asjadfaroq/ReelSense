let jwt = require('jsonwebtoken');
const crypto = require('crypto');

const usersignup = require('../model/signup');
const { generateToken, refreshtoken: createRefreshToken } = require('../service/security');

function authmiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const secretKey = process.env.JWT_SECRET || "secretkey@123";
        let decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

// Refresh token rotation:
// - verifies refresh JWT
// - checks it matches latest refreshTokenHash stored in MongoDB
// - issues a new access token + a new refresh token
// - stores the hash of the new refresh token
async function refreshtoken(req, res, next) {
    let refreshT = req.body.token;
    if (!refreshT) {
        return res.status(401).json({ message: "Unauthorized: No refresh token provided" });
    }

    try {
        let decode = jwt.verify(refreshT, process.env.JWT_REFRESH_SECRET || "refreshsecret@123");

        const user = await usersignup.findById(decode.id);
        if (!user || !user.refreshTokenHash) {
            return res.status(401).json({ message: "Invalid or expired refresh token" });
        }

        const presentedHash = crypto.createHash('sha256').update(refreshT).digest('hex');
        if (presentedHash !== user.refreshTokenHash) {
            return res.status(401).json({ message: "Invalid or expired refresh token" });
        }

        // Issue new tokens (rotation)
        const newRefreshT = createRefreshToken({ email: decode.email, id: user._id, createdAt: Date.now() });
        const newAcessToken = generateToken({ email: decode.email, id: user._id, createdAt: Date.now() });

        user.refreshTokenHash = crypto.createHash('sha256').update(newRefreshT).digest('hex');
        await user.save();

        return res.status(200).json({ token: newAcessToken, refreshToken: newRefreshT });
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired refresh token" });
    }
}

module.exports = { authmiddleware, refreshtoken };