const fs = require('fs');

module.exports.homepage = fs.readFileSync("./public/index.html",'utf-8');
