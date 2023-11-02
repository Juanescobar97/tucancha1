const express = require("express");
const morgan = require("morgan");
const main = require("./routes/main");

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(morgan("dev"))
// app.use(express.json())
app.use(main);


module.exports = app