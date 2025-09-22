import express from 'express';
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../Controllers/product.js';


const router= express.Router();




//add product route
//@api - /api/product/add
router.post('/add',addProduct)

//get all products
//@api - /api/product/all
router.get('/all',getAllProducts)

//get product by id
//@api - /api/product/:id
router.get('/:id',getProductById)

//update product by id
//@api - /api/product/:id
router.put('/:id',updateProductById)

//delete product by id
//@api - /api/product/:id
router.delete('/:id',deleteProductById)




export default router;