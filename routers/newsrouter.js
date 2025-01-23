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
  news.create(req.body, id);
  await ImageProcess(req, id);
});

module.exports = router;
