const getTemperature = require("./utils/getTemperature");
const logger = require("./utils/logger");


const location = process.argv[2];

getTemperature(location, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    logger(location, data.min_temp, data.max_temp);
  }
});
