var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var _ = require('lodash')
var morgan = require('morgan')

var alienRouter = require('./aliens')

app.use(morgan('dev'))
app.use(express.static('client'))

// body parser to post json to the server
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/aliens', alienRouter)

app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send(err)
  }
})

app.listen(3000)
console.log('Server is listening at 3000')
