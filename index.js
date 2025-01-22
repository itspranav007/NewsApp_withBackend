const express = require('express');
const app = express();
const News = require('./news/news')

app.use(express.static('./public'))

const news = new News();

news.create({title:'some title',content:'Some Contessssnt'});


const PORT =5000;

app.listen(PORT,()=>{

  console.log(`Server Running On Server http://localhost:${PORT}`)
})