const express = require('express');
const app = express();

app.get('/',(req,res)=>{

  res.send('<h1>Server</h1>');
})


const PORT =5000;

app.listen(PORT,()=>{

  console.log(`Server Running On Server http://localhost:${PORT}`)
})