const express = require("express");

const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//public static path

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
//link connect to index.html


//Routing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/notes", (req, res) => {
  res.render("notes");
});

app.get("*", (req, res) => {
  res.render("error");
});

//listening port
app.listen(port, () => {
  console.log(`You are listening to the port no ok ${port}`);
});
