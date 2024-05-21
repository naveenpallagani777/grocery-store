const express = require('express');
const app = express();
// const reader = require('./Reading_html/reader');
const route = require("./Routers/routers");
app.use(express.json());
app.use(express.static('./public'));

app.use('/home',route);


app.listen("3000",()=>{
    console.log("server is started at localHost:3000 .....");
})



