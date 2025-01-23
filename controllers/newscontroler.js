const News = require('../news/news');
const ImageProcess = require("../utils/imageProcess");

const createNews = async (req, res) => {
  const news = new News();
  const id = news.createId(); // Assuming this method generates a unique ID for news

  try {
    const imageName = await ImageProcess(req, id); // Process the image and get its name

    // Add news data (assumes `create` method takes body, ID, and image name)
    await news.create(req.body, id, imageName);

    // Respond with a success message
    res.status(200).send("Submit successful");
  } catch (error) {
    console.error("Error While Creating News In Controller:", error);

    // Respond with an error message
    res.status(500).send("Failed to create news.");
  }
};

module.exports = { createNews };
