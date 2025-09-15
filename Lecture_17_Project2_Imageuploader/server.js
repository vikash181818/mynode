import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
// const upload = multer({ dest: 'uploads/' })


const app = express();
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ 
  cloud_name: 'dtmtrkrzk', 
  api_key: '395349277414998', 
  api_secret: '5bN7qnqh2UHaEcBIjM94vww1qA0',
  secure: true
});
mongoose.connect('mongodb+srv://vikashkumar620404800_db_user:cEMdwJidpexODmPs@cluster0.as6i4kn.mongodb.net/',
     {dbName: 'mynodejs'}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
}       );

const port = 3000;  


//rendring ejs file
app.get('/', (req, res) => {
    res.render('index.ejs',{url:null});
}       );





const storage = multer.diskStorage({
//   destination: './public/uploads', 
  filename: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const imageSchema = new mongoose.Schema({
    filename: String,
    public_id: String,
    imgUrl: String
})

const File= mongoose.model('cloudinary', imageSchema);


app.post('/upload', upload.single('file'), async (req, res, next)=> {
const file = req.file.path;
const cloudinaryRes = await cloudinary.uploader.upload(file, {
  folder: "image-uploader"
});

//save to database
const db =await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url


});
res.render('index.ejs',{url:cloudinaryRes.secure_url});


//
// res.json({message:"file uploaded successfully",cloudinaryRes});


});







app.listen(port, () => {        
    console.log(`Server is running on http://localhost:${port}`);
});