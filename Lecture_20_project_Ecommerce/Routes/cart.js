import express from 'express';
import { addToCart ,clearCart,decreaseItemQuantity,getCart, removeFromCart} from '../Controllers/cart.js';
import { isAuthenticated } from '../Middlewares/Auth.js';

const router= express.Router();


//add to cart
//@api - /api/cart/add
router.post('/add',isAuthenticated,addToCart)


//get user cart
//@api - /api/cart/
router.get('/user',isAuthenticated,getCart)

//remove from cart
//@api - /api/cart/:productId
 router.delete('/remove/:productId',isAuthenticated,removeFromCart)

//clear cart
//@api - /api/cart/clear
router.delete('/clear',isAuthenticated,clearCart)


//decrease item quantity
//@api - /api/cart/decrease/:productId
 router.put('/--qty',isAuthenticated,decreaseItemQuantity)
export default router;