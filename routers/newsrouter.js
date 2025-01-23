const express = require("express");
const router = express.Router();

// Importing middleware and controller
const uploads = require("../middleware/multer");
const NewsController = require("../controllers/newscontroler");

// Route for creating news
router.post("/create", uploads.single("thumbnail"), NewsController.createNews);

module.exports = router;
