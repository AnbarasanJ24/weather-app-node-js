const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Pondicherry&APPID=c4a6ab5e461a2ef6a2afd648db376615'

request.get({ url: URL }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.list[0].main)
})