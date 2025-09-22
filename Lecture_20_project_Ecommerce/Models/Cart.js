import mongoose from "mongoose";


const cartItemSchema= new mongoose.Schema({

productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required:true},
title : {type:String, required:true},
price: {type:Number, required:true},
quantity: {type:Number, required:true, default:1},

});


const cartSchema= new mongoose.Schema({

userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true, unique:true},
items: [cartItemSchema],

},);

export const Cart= mongoose.model('cart', cartSchema);  