import express from 'express';
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
  res.send('Hello from Express Server');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});