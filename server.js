// Declaring variables used in this app
var express = require('express')
var app = express()

var jsonData = { count: 1962, message: 'Uganda Yaffe!' }

// Routing the index file to home
app.get('/', function (req, res) {
  // eslint-disable-next-line no-path-concat
  res.sendFile(__dirname + '/index.html', function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Routing the jssonData variable
app.get('/data', function (req, res) {
  res.json(jsonData)
})

app.listen(3000)
console.log('Server is listening')
