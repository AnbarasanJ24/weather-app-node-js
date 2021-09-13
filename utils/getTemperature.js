const request = require("request");
const https = require("https");

// Using Request NPm Library
const getTemperature = (location, callback) => {
  const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
    location
  )}
  &APPID=c4a6ab5e461a2ef6a2afd648db376615`;

  request.get({ url: URL, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to Weather", undefined);
    } else if (response.body.cod === "404") {
      callback(response.body.message, undefined);
    } else {
      const min_temp = response.body.list[0].main.temp_min;
      const max_temp = response.body.list[0].main.temp_max;
      callback(undefined, { min_temp, max_temp });
    }
  });
};
// Using Node HTTP Module
// const getTemperature = (location, callback) => {
//   const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
//     location
//   )}
//   &APPID=c4a6ab5e461a2ef6a2afd648db376615`;

//   const request = https.request(URL, (response) => {
//     let data = "";
//     response.on("data", (chunk) => {
//       data += chunk.toString();
//     });
//     response.on("end", () => {
//       const result = JSON.parse(data);
//       callback(result.list[0].main);
//     });
//   });
//   request.on("error", () => {
//     console.log("Error Occured");
//   });
//   request.end();
// };

module.exports = getTemperature;
