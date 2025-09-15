import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,       
    required: true
  },
  email: {  
    type: String,
    required: true,
    unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

}, {timestamps: true});

 export const User = mongoose.model('user', userSchema);