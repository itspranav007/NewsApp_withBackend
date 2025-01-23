const express = require("express");
const app = express();
const newsRouter = require('./routers/newsrouter')

app.use(express.static("./public"));
app.use(express.static("./data/uploadsImage"));


app.use('/api',newsRouter)



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Server http://localhost:${PORT}`);
});
