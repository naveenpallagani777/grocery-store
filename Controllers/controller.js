const reader = require("../Reading_html/reader");
const {Farmer, Customer} = require("../modelSchema/modelschema");
const mongoose = require("mongoose");

exports.homepage = (req,res) => {
    Customer.find()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})
    res.status(200).send(reader.homepage);

}

