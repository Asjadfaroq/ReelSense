let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let signupSchema = new Schema({
    username: String,
    email: String,
    password: String,
    // Used for refresh-token rotation. We store only a hash of the latest refresh token.
    refreshTokenHash: String
})
let usersignup = mongoose.model('usersignup', signupSchema);
module.exports = usersignup;