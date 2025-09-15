import express from 'express';
import path from 'path';
const app = express();


const PORT = 3000;  

app.use(express.static(path.join(path.resolve(), 'public')));


app.get('/', (req, res) => {
  res.render('index.ejs', { root: 'views' });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}       );