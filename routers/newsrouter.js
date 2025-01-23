const express = require("express");
const router = express.Router();
const fs = require("fs");
//==>Image Resize Before Saving
const News = require("../news/news");
const sharp = require("sharp");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/create", upload.single("thumbnail"), async (req, res) => {
  res.send("Submit successful");

  console.log("file", req.file); //=>check
  console.log("body", req.body); //==>check

  fs.access("./data/uploadsimage/", (err) => {
    if (err) {
      fs.mkdirSync("./data/uploadsimage/");
    }
  });

  const id = new News().createId();
  const fileName = `${id}-${req.file.originalname}`
  await sharp(req.file.buffer)
    .resize({ width: 615, height: 350 })
    .toFile(`./data/uploadsimage/${fileName}` + req.file.originalname);
});

module.exports = router;
