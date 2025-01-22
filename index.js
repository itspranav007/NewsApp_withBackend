const express = require('express');
const app = express();
const News = require('./news/news')

app.use(express.static('./public'))

new News();


const PORT =5000;

app.listen(PORT,()=>{

  console.log(`Server Running On Server http://localhost:${PORT}`)
})