import mongoose from "mongoose";
const userSchima = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    createdAt: {type:Date, default: Date.now}




})


export const User= mongoose.model('User', userSchima);