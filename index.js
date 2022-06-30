
const express = require("express");
const app = express();
// dotenv file require
require("dotenv").config();
// my port number
const port = process.env.PORT;
// require mongoose library
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(require("./router/rout"));

//mongoose connect

mongoose
  .connect(process.env.DATABASE_URL, {

    useNewUrlParser: true,

  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("no connected");
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
