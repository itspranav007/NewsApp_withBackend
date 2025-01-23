const multer = require("multer");

const storage = multer.memoryStorage(); // Example storage configuration
const upload = multer({ storage });

module.exports = upload;
