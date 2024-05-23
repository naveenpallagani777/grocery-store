const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const reader = require('./Reading_html/reader');
const route = require("./Routers/routers");



app.use(express.static('./public'));

app.use('/home',route);

mongoose.connect("mongodb+srv://admin:B5Kp27Up0AMo1vK8@cluster0.mk3wexz.mongodb.net/Grocery_Store?retryWrites=true&w=majority&appName=Cluster0",
).then((conn) => {
    // console.log(conn);
    console.log('DB connect successful');
}).catch((error) => {
    console.log(error);
})





app.listen("3000",()=>{
    console.log("server is started at localHost:3000 .....");
})



