const fs = require("fs");

class News {
  constructor(filename = "newsData.json") {
    this.path = `./data/${filename}`;

    try {
      fs.readdirSync("data"); //==Read File Availble Or NOt
    } catch (error) {
      fs.mkdirSync("data"); //===> If no Create File
    }

    try {
      fs.accessdirSync(this.path);
    } catch (error) {
      fs.writeFileSync(this.path, '[]');
    }
  }
}

module.exports = News;
