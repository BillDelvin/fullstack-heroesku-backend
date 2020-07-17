var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//setelah ini
const heroesRouter = require("./routes/Heroes");

var app = express();
// mongoose => membuat koneksi ke database
mongoose.connect('mongodb://localhost/hero', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/heroes", heroesRouter);

module.exports = app;
