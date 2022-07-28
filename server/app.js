const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const port = 8001;

//app.get("/",(req,res)=>{
//  res.send("server start")
//  });





  app.listen(port,()=>{
    console.log("server starts at port no :" + port);
})