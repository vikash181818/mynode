
import { User } from '../Models/User.js';
import becrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const register=  async(req,res)=>{
    const {name,email,password}= req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"please enter all fields"});
    }
let user= await User.findOne({email});
if(user){
    return res.status(400).json({message:"user already exists",success:false});
}
const hashedPassword= await becrypt.hash(password,10);

   user= await User.create({name,email,password:hashedPassword
   });
    res.json({message:"user created successfully",success:true,user});
    


}


export const login= async(req,res)=>{
    const{email,password}= req.body;
    if(!email || !password){
        return res.status(400).json({message:"please enter all fields"});
    }   
    const user= await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"user does not exists",success:false});
    }
    const isMatch= await becrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"incorrect password",success:false});
    }   

    const token= jwt.sign({userId:user._id},process.env.JWT_SECRET,{
        expiresIn:'7d'
    });
    res.json({message:"user logged in successfully",token,success:true,user});
}


