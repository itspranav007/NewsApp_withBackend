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

  console.log("file", req.file); //=>check
  console.log("body", req.body); //==>check


  const id = new News().createId();

await ImageProcess(req,id);

});

module.exports = router;
