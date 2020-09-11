const dotenv = require('dotenv').config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
var port = process.env.PORT || 4000;


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use("/api", require("./api"));



app.listen(port, () => {
    console.log("server is listening");
})


