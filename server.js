var https = require('https')
var http = require('http')
var express = require('express')
var wagner = require('wagner-core')
var bodyParser = require('body-parser')
var logger = require('morgan')
var cors = require('cors')
var config = require('./config')
var fs = require('fs')

var app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/' + config.API_VERSION, require('./api')(wagner))

app.get(['/*'], function (req, res) {
  return res.status(404).json({
    title: 'URL Not Found',
    status: 404,
    description: 'URL Not Found'
  })
})

var httpServer
if (process.env.NODE_ENV === 'production') {
  httpServer = https.createServer({
    key: fs.readFileSync(config.SERVER_KEY),
    cert: fs.readFileSync(config.SERVER_CRT)
  }, app).listen(config.PORT)
} else {
  httpServer = http.createServer(app).listen(config.PORT)
}

console.log('Listening on port ' + config.PORT + '!')

module.exports = httpServer
