const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index");
});

app.listen(3005, () => {
  console.log("Server is RUNNING ");
});
