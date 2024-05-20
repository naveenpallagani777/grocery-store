const express = require("express");
const pageroutes = express.Router();
const controller = require("../Controllers/controller")

pageroutes.route('/').get(controller.homepage);

module.exports = pageroutes;