import jwt from "jsonwebtoken";

import { User } from "../Models/User.js";



export const isAuthenticated= async (req,res,next)=>{
    const token =req.header('Auth')
    if(!token){
        return res.status(401).json({message: 'Login first'});
    }

const decoded= jwt.verify(token, process.env.JWT_SECRET);

const id = decoded.id;
let user= await User.findById(id);
if(!user){
    return res.json({message: 'user not found'});

}
req.user= user;
next();



}