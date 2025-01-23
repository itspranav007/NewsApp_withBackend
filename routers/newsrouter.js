const express = require("express");
const router = express.Router();

//==>Image Resize Before Saving
const News = require("../news/news");

const multer = require("multer");
const ImageProcess = require("../utils/imageProcess");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/create", upload.single("thumbnail"), async (req, res) => {
  res.send("Submit successful");

  const news = new News();
  const id = news.createId();


  const imageName = await ImageProcess(req, id);
  news.create(req.body, id,imageName);//=> http://localhost:5000/image-name


});

module.exports = router;
