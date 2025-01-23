const fs = require('fs');
const sharp = require("sharp");

const ImageProcess = async (req, id) => {
  fs.access("./data/uploadsimage/", (err) => {
    if (err) {
      fs.mkdirSync("./data/uploadsimage/");
    }
  });

  const formatedName = req.file.originalname.split("").join("-");
  const fileName = `${id}-${formatedName}`;

  try {
    await sharp(req.file.buffer)
      .resize({ width: 615, height: 350 })
      .toFile(`./data/uploadsimage/${fileName}` + req.file.originalname);
  } catch (error) {
    console.log("Error while Processing Image ", error);
  }
};

module.exports = ImageProcess;
