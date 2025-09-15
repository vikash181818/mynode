import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.set('view engine', 'ejs'); // Set EJS as the templating engine
const PORT = 3000;  


app.get('/', (req, res) => {
  res.render('index.ejs');
}       );


app.post('/submit-form', (req, res) => {
    console.log(req.body);
    

    res.json({message: "Form submitted successfully", success:true});
//   const { name, email } = req.body;
//   res.send(`Form submitted! Name: ${name}, Email: ${email}`);
}       );



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}       );

// Serve static files from the 'public' directory
app.use(express.static('public'));