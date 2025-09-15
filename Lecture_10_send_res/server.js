import express from 'express';
const app = express();

import path from 'path';
const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 },
];
//send response
app.get('/', (req, res) => {

    //for json response
    // res.json({ message: 'Welcome to the Product API',products:products, success:true });
// for html response
    // res.send('Hello, this is the home page!');

    //for html file response
const url = path.join(  path.resolve(), 'index.html' );

    res.sendFile(url);
   
});




















const PORT = 3000;  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

