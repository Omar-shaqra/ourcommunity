const express = require("express");
const bodyparser=require("body-parser");
const app=express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
const _=require("lodash");

app.use(express.static(__dirname + '/public'));
app.listen(32002,function(){
console.log("stat server on 32002");

});

let day=new Date();
var today = new Date().toISOString().slice(0,10);
let options={day:"numeric",
month:"numeric",
year:"numeric"
}

app.get("/",(req,res)=>{
  console.log(today);
  res.render("index");
})
