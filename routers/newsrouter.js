const express = require("express");
const router = express.Router();

// Importing middleware and controller
const uploads = require("../middleware/multer");
const NewsController = require("../controllers/newscontroler");

const {check,validationResult} = require('express-validator');
const expectedCategory = ['tech','political','education']
const validator = [ 
  check('title').trim().not().isEmpty().withMessage('Title is Required !'),
  check('content').trim().not().isEmpty().withMessage('content is Required !'),
  check('thumbnail').trim().not().isEmpty().withMessage('thumbnail is Required !'),
  check('category').isIn(expectedCategory).withMessage('select category atleast One !'),
]

const result = (req,res,next)=>{
  const result = validationResult(req)
  const hasError =! result.isEmpty();

  if(hasError){
    const error = result.array()[0].msg
    res.json({success:false,message:error})
  }

  next();
}


// Route for creating news
router.post("/create", uploads.single("thumbnail"),validator,result, NewsController.createNews);



module.exports = router;
