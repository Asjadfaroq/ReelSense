let jwt = require('jsonwebtoken');

function generateToken (data) {
    const secretKey = process.env.JWT_SECRET || "secretkey@123";
    // Access token: 1 hour validity
    let token = jwt.sign(data, secretKey, {expiresIn: "1h"});
    return token;
}
function refreshtoken(data){
    // Refresh token: 7 days validity
    let refreshtoken = jwt.sign(data , process.env.JWT_REFRESH_SECRET || "refreshsecret@123", {expiresIn: "7d"})
    return refreshtoken
}
module.exports = {generateToken , refreshtoken};