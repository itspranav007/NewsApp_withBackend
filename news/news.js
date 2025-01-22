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
      fs.accessSync(this.path);
    } catch (error) {
      fs.writeFileSync(this.path, '[]');
    }
  }

async create(data){
  const TotalData = JSON.parse(await fs.promises.readFile(this.path, "utf-8"));

      TotalData.push(data)

      await fs.promises.writeFile(this.path,JSON.stringify(TotalData,null,2))

 }




}//=> News Class End
module.exports = News;
