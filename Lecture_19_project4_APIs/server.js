//follow mvc architecture
//model view controller
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import contactRouter from './Routes/contact.js';
import userRoutes from './Routes/user.js';
import {config} from 'dotenv';
const app= express();

//.env setup
config({path:'.env'});
app.use(bodyParser.json());
//home route


//user routes

app.use('/api/users',userRoutes);
//contact routes
app.use('/api/contact',contactRouter);


app.get('/',(req,res)=>{
    res.json('API project');
})















mongoose.connect(process.env.MONGODB_URL,
     {dbName: 'mynodejs'}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
}       );



const PORT= process.env.PORT;








app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});