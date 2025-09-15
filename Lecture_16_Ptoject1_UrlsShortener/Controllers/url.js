
import { Url } from "../Models/Url.js";
import shortid from "shortid";



export const shortUrl = async (req, res) => {
       const longUrl = req.body.longUrl;
         const shortCode = shortid.generate();

         const shortUrl=`http://localhost:3000/${shortCode}`;

         //save to database
         const newUrl= new Url({shortCode,longUrl});
         await newUrl.save();
         console.log("Short URL created:", newUrl);
         res.render('index.ejs',{shortUrl});

}


export const getOriginalUrl = async (req, res) => {
    
const shortCode = req.params.shortCode;
//find on database
const originalUrl = await Url.findOne({shortCode}).exec();

if(originalUrl){
    return res.redirect(originalUrl.longUrl);
}else{
    return res.status(404).json({error: 'Short URL not found'});
} 
res.json({originalUrl});

}