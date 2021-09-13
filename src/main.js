const express = require("express");
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '../public')
console.log(publicPath)

app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/help", (req, res) => {
  const user = {
    username: "Anbarasan",
    age: 25,
  };
  res.send(user);
});

app.get("/weather", (req, res) => {
  res.send("About Page!");
});

app.listen(3000, () => {
  console.log("Server Started at ", 3000);
});
