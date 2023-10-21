const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://ritikaraut122:QfafnhskvkU6B8re@cluster0.x70sbdz.mongodb.net/Marketplace?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

module.exports = connection;