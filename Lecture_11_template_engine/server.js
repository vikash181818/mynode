import express from 'express';

const app = express();

const PORT = 3000; 

let products = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
];



app.get('/', (req, res) => {
    let name = "John Doe";
  res.render('index.ejs', {name, products});
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}       );






 