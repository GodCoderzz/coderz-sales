import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email })
        var bytes  = CryptoJS.AES.decrypt(user.password, 'sgund123');
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedPass) {
                var token = jwt.sign({  name: user.name, email: user.email }, 'jwtsec', {
                    expiresIn: "2d"
                });

                res.status(200).json({success: true, token})
            } else { res.status(200).json({ success: false, error: "Invalid credentials!" }) }
        } else {
            res.status(200).json({ success: false, error: "User not found!" })
        }

    }

    res.status(400).json({ error: "Method not allowed!" })
}

export default connectDb(handler);