import express from 'express';
const app = express();
const PORT = 3000;          


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//C = Create
app.post('/create', (req, res) => {
  res.send('Create Operation');
});

//R = Read
app.get('/read', (req, res) => {
  res.send('Read Operation');
});     

//U = Update
app.put('/update', (req, res) => {
  res.send('Update Operation');
});

//D = Delete
app.delete('/delete', (req, res) => {
  res.send('Delete Operation');
});