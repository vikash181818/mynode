
import {User} from "../Models/User.js";   

export const userRegister =async (req, res) => {

    console.log("getting data from body", req.body);
    try {
        let user = await User.create(req.body);
        res.json({
            message: "user created successfully",
            Newuser: user, 
            success: true
        });
    } catch (error) {
res.json({
    message: "error in creating user",
    error: error.message,
    success: false
});
    }
}