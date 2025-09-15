import express from 'express';      
import mongoose from 'mongoose';
import {shortUrl} from './Controllers/url.js'
import {getOriginalUrl} from './Controllers/url.js'
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://vikashkumar620404800_db_user:cEMdwJidpexODmPs@cluster0.as6i4kn.mongodb.net/',
     {dbName: 'mynodejs'}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
}       );




//rendering the ejs file
app.get('/', (req, res) => {
    res.render('index.ejs',{shortUrl:null});
}       );

//shortening the url
app.post('/shorten-url',shortUrl );
    
// redirect to original url using short code: dynamic route
app.get('/:shortCode', getOriginalUrl);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});