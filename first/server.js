// Declaring variables used in this app
var express = require('express')
var app = express()

var jsonData = { count: 1962, message: 'Uganda Yaffe!' }

// Routing the index file to home
app.get('/', function (req, res) {
  
  res.sendFile(__dirname + '/index.html', function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Routing the jsonData variable
app.get('/data', function (req, res) {
  res.json(jsonData)
})

app.listen(3000)
console.log('Server is listening')
