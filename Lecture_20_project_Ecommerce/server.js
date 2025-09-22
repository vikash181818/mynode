//follow mvc architecture
//model view controller
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js';
import {config} from 'dotenv';
import cartRouter from './Routes/cart.js';

import productRouter from './Routes/product.js';
const app= express();

//.env setup
config({path:'.env'});
app.use(bodyParser.json());
//home route


//user routes

app.use('/api/user', userRouter);

//product routes
app.use('/api/product', productRouter);

//cart routes
app.use('/api/cart', cartRouter);

app.get('/',(req,res)=>{
    res.json('API project');
})















mongoose.connect(process.env.MONGODB_URL,
     {dbName: 'MyEcommerce'}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
}       );



const PORT= process.env.PORT;








app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});