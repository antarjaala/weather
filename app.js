const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=15.963060&lon=76.654780&exclude={part}&appid=78c7a92df5e0a5a0584e9b9ece044239"
  https.get(url,function(response){
    console.log(response);
  })
  res.send("SOme MEssage");
})

app.listen(3000,function(){
  console.log("app running on 3000 port")
})
