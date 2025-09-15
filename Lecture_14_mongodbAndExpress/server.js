import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://vikashkumar620404800_db_user:cEMdwJidpexODmPs@cluster0.as6i4kn.mongodb.net/',
     {dbName: 'mynodejs'}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
}       );




const PORT = 3000;  















app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}       );