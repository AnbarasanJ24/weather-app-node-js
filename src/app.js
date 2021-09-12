const express = require("express");
const app = express();

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
