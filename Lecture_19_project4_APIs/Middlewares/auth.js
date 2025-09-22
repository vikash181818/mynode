import jwt from 'jsonwebtoken';
import { User } from '../Models/User.js';


export const isAuthenticated = async(req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Login first", success: false });
    }
    // console.log(token);


    const decoded = jwt.verify(token, process.env.JWT_SECRET);
     console.log(decoded);
  const userId = decoded.userId;
 let user= await User.findById(userId);
    if(!user){
        return res.status(401).json({ message: "user not found", success: false });
    }
    

    req.user = user;
    next();

}