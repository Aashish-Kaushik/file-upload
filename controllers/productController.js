const product = require("../models/Product");
const { StatusCodes } = require("hhtp-status-code");

exports.creatUsers = async (req, res) => {
  res.send("create User ");
};

exports.getAllUsers = async (req, res) => {
  res.send("get all users");
};
