import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
   if(req.method == 'POST'){
     let {name, email} = req.body
    let p = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, 'sgund123').toString()})
    await p.save()
    res.status(200).json({success: "User added successfully!"})
   }
   
    res.status(400).json({error: "Method not allowed!"})
  }
  
export default connectDb(handler);