const express = require('express');
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    res.send("Hello Hii")
});

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})