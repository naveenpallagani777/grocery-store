const reader = require("../Reading_html/reader")

exports.homepage = (req,res) => {
    res.status(200).send(reader.homepage);
}