const News = require("../news/news");
const ImageProcess = require("../utils/imageProcess");

const createNews = async (req, res) => {
  const news = new News();
  const id = news.createId();

  try {
    const imageName = await ImageProcess(req, id);

    await news.create(req.body, id, imageName);

    res.status(200).send("Submit successful");
  } catch (error) {
    console.error("Error While Creating News In Controller:", error);

    res.status(500).send("Failed to create news.");
  }
};

module.exports = { createNews };
