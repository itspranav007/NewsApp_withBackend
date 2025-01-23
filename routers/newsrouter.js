const express = require('express');
const router = express.Router();

//==>Image Resize Before Saving
const sharp = require('sharp');
const multer = require('multer');
const fs = require('fs')
const storage = multer.memoryStorage();
const upload = multer({storage})


router.post('/create',upload.single('thumbnail'),async(req,res)=>{
  res.send('Submit successful');

console.log('file',req.file)//=>check 
console.log('body',req.body)//==>check

fs.access('./data/uploadsimage',(err)=>{
  if(err)
    {
      fs.mkdirSync('./data/uploadsimage')
    }
})
await sharp(req.file.buffer).resize({width:615,height:350}).toFile('./data/uploadsimage'+req.file.originalname);



})


module.exports=router;