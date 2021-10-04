const express = require("express");
const app = express();

const path = require('path');
const hbs = require('hbs');
const getTemperature = require("../utils/getTemperature");

// Define Path 
const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

// Setup Handle bar 
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup Static content config
app.use(express.static(publicPath));


// All CRUD Operation
app.get("", (req, res) => {
  res.render('index', {
    title: 'Weather',
    body: 'Body of Weather App '
  })
});

app.get("/weather", (req, res) => {

  if (!req.query.city) {
    return res.send({
      error: "City Not found"
    })
  }

  getTemperature(req.query.city, (error, data) => {

    if (error) {
      return res.send({ error })
    }

    res.send({
      city: req.query.city,
      min_temp: data.min_temp,
      max_temp: data.max_temp
    });
  })

});

app.get('/help/*', (req, res) => {
  res.send("Help Page not found ")
})

app.get('**', (req, res) => {
  res.render('error404');
})

app.listen(3000, () => {
  console.log("Server Started at ", 3000);
});
