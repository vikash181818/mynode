import {Cart} from '../Models/Cart.js';



//add to cart

export const addToCart= async (req,res)=>{
  const {productId,title, price, quantity}= req.body;
const userId= req.user;
let cart= await Cart.findOne({userId});
if(!cart){
  //create new cart
  cart=new Cart({userId, items: []});
}

//check if product already in cart
const itemIndex= cart.items.findIndex((item)=> item.productId.toString()=== productId);
if(itemIndex > -1){
  //product exists in cart, update quantity
  cart.items[itemIndex].quantity += quantity;
  cart.items[itemIndex].price += price*quantity; //update price in case it has changed
}else{
  //product not in cart, add new item
  cart.items.push({productId, title, price, quantity});
}
await cart.save();
res.json({message: 'Product added to cart', cart});

}

//get user cart
export const getCart= async (req,res)=>{
  const userId= req.user;
  let cart= await Cart.findOne({userId})
  if(!cart){
    return res.json({message: 'Cart is empty', cart: {items: []}});
  }
  res.json({message: 'User cart fetched', cart});
  };


  //remove from cart
  export const removeFromCart= async (req,res)=>{
    const productId= req.params.productId;
    const userId= req.user;
    let cart= await Cart.findOne({userId});
    if(!cart){
      return res.json({message: 'Cart is empty'});
    }
    cart.items= cart.items.filter((item)=> item.productId.toString() !== productId);
    await cart.save();
    res.json({message: 'Product removed from cart', cart});
    }

    //clear cart
    export const clearCart= async (req,res)=>{
      const userId= req.user;
      let cart= await Cart.findOne({userId});
      if(!cart){
        cart= new Cart({userId, items: []});
      }else{
        cart.items= [];
      }
        await cart.save();
        res.json({message: 'Cart cleared', cart});
        };


        //decrease item quantity in cart
        export const decreaseItemQuantity= async (req,res)=>{
 const {productId,quantity}= req.body;
const userId= req.user;
let cart= await Cart.findOne({userId});
if(!cart){
  //create new cart
  cart=new Cart({userId, items: []});
}

//check if product already in cart
const itemIndex= cart.items.findIndex((item)=> item.productId.toString()=== productId);
if(itemIndex > -1){
 const item= cart.items[itemIndex];
 if(item.quantity> quantity){
    const pricePerUnit= item.price / item.quantity;
  item.quantity -= quantity;
  item.price -= pricePerUnit*quantity; //update price in case it has changed
 }else{
  //remove item from cart
  cart.items.splice(itemIndex,1);
 }
}else{
  return res.json({message: 'Product not in cart'});
}
await cart.save();
res.json({message: 'Product quantity decreased', cart});


        }
