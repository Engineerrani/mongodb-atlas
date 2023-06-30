const mongoose = require("mongoose");
require("dotenv").config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const uri =
  "mongodb+srv://rani:1234@cluster0.wues2mw.mongodb.net/College?retryWrites=true&w=majority";

const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => console.log("connected to cloud atlas"))
  .catch((err) => console.log(err));

module.exports = connection;
