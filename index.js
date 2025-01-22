const express = require("express");
const app = express();
const News = require("./news/news");

app.use(express.static("./public"));

const news = new News();

news.create({
  title: "some title",
  content: "Some Contnt",
  category: "Police",
});

const testall = async () => {
  const alldata = await news.getAll();
  console.log(alldata);
};
const testSingle = async () => {
  const alldata = await news.getSingle("1737564120135");
  console.log(alldata);
};
const testCategory = async () => {
  const alldata = await news.getByCategory("Tech");
  console.log(alldata);
};

testall();
testSingle();
testCategory();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Server http://localhost:${PORT}`);
});
