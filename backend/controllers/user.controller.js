import {user} from "../models/user.model.js";
imp
 (export.const register - async (req,res) = > {
    export const register = async (req, res) => {
    try {
        const {fullname , email, phoneNumber , password, role} =req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({message: "Something is missing", succcess: false  

            });
        }
        const user = await User.findOne ({email});
        if (user){
            return res.status(400).json({message: "User already exists", success: false});
        }
        const hashedpassword = await bcrypt

    }
    const hashedpassword = await bcrypt
}catch (error) {

}