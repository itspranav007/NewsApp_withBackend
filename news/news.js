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
      fs.writeFileSync(this.path, "[]");
    }
  }

  createId() {
    return new Date().getTime().toString();
  }

  async create(data) {
    const TotalData = await this.getAll();
    const id = this.createId();
    TotalData.push({ ...data, id });

    await fs.promises.writeFile(this.path, JSON.stringify(TotalData, null, 2));
  }

  async getAll() {
    return JSON.parse(await fs.promises.readFile(this.path));
  }

  async getSingle(id) {
    const data = await this.getAll();
    return data.find((news) => news.id === id);
  }
  async getByCategory(category) {
    const data = await this.getAll();
    return data.filter((news) => news.category === category);
  }
} //=> News Class End
module.exports = News;
