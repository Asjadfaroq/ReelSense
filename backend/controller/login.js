let usersignup = require('../model/signup');
const crypto = require('crypto');
const { generateToken , refreshtoken } = require('../service/security');
const { validateLoginData } = require('../utils/validation');
const bcrypt = require('bcrypt');

async function handleloginuser(req, res) {
    try{
        let {email , password} = req.body;

        const validation = validateLoginData({ email, password });
        if (!validation.isValid) {
            return res.status(400).json({ message: validation.message });
        }

        let user = await usersignup.findOne({ email: email });
        if(!user) {
            user = await usersignup.findOne({ username: email });
        }
        if(!user) {
            return res.status(400).json({message: "Invalid credentials"})
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword)
        {
            return res.status(400).json({message: "Invalid credentials"})
        }

        let refreshT = refreshtoken({email: user.email , id: user._id , createdAt: Date.now()})
        let token = generateToken({email: user.email , id: user._id , createdAt: Date.now()})


        
        const refreshTokenHash = crypto.createHash('sha256').update(refreshT).digest('hex');
        user.refreshTokenHash = refreshTokenHash;
        await user.save();

        return res.status(200).json({message: "login success" , token: token, refreshToken: refreshT});

       
    }
    catch(error)
    {
        return res.status(500).json({message: error.message})
    }
}

module.exports = handleloginuser;