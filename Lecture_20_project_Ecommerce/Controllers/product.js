import { Product } from "../Models/Product.js";




//add product
export const addProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body);
        res.json({ message: 'Product added successfully', product, success: true });

    } catch (error) {
        res.json(error.message);
    }
};

//get all products
export const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        if (!products) {
            return res.json({ message: 'No products found' });
        } else {
            return res.json({ message: 'fetch all product', products, success: true });
        }
    } catch (error) {
        res.json(error.message);
    }
}


//get product by id
export const getProductById = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.json({ message: 'Invalid product id' });
        } else {
            return res.json({ message: 'fetch product by id', product, success: true });
        }
    } catch (error) {
        res.json(error.message);
    }
}


//update product by id
export const updateProductById = async (req, res) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id
            , req.body, { new: true });
        if (!product) {
            return res.json({ message: 'Invalid product id' });
        }


        return res.json({ message: 'Product updated successfully', product, success: true });
    } catch (error) {
        res.json(error.message);
    }
}

//delete product by id
export const deleteProductById = async (req, res) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.json({ message: 'Invalid product id' });
        }
        return res.json({ message: 'Product deleted successfully', success: true });
    } catch (error) {
        res.json(error.message);
    }
}

