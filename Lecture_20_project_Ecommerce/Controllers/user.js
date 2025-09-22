import { User } from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
//user registration
export const registerUser= async (req,res)=>{
  const {name, email, password}= req.body;
  let user= await User.findOne({email});
  if(user){
    return res.status(400).json({message: 'User already exists'});
  }
    const hashedPassword= await bcrypt.hash(password,10);


    user=await User.create({name, email, password: hashedPassword});
    res.status(201).json({message: 'User registered successfully', user});
};



//login user
export const login= async (req,res)=>{
    const {email, password}= req.body;

    let user= await User.findOne({email});
    if(!user){
      return res.status(400).json({message: 'User not exists'});
    }
    const isMatch= await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({message: 'Invalid credentials'});
    }

    //generate token
    const token= jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
    res.status(200).json({message: 'Login successful', token});
};