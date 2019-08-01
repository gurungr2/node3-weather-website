const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/33514bb0a5723a1e677f37571bd6f5f4/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({url: url, json: true}, (error, {body} = response) => {
        if (error) {
            callback('Cannot connect to the weather API!')
        } else if (body.error) {
        callback('Unable to find location!')
        } else {
        callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain')       
    }
    })
}

module.exports = forecast