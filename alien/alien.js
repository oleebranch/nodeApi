var alienRouter = require('express').Router

var aliens = []
var id = 0

var updateId = function (req, res, next) {
  if (!req.body.id) {
    id++
    req.body.id = id + ''
  }
  next()
}

alienRouter.param('id', function (req, res, next, id) {
  var
  if (alien) {
    req.alien = alien
    next()
  } else {
    res.send()
  }
})

app.get('/aliens', function (req, res) {
  res.json(aliens)
})

app.get('/aliens/:id', function (req, res) {
  var alien = _.find(aliens, { id: req.params.id })
  res.json(alien || {})
})

app.post('/aliens', updateId, function (req, res) {
  var alien = req.body

  aliens.push(alien)

  res.json(alien)
})

app.put('/aliens/:id', function (req, res) {
  var update = req.body
  if (update.id) {
    delete update.id
  }
  var alien = _.findIndex(aliens, { id: req.params.id })
  if (!aliens[alien]) {
    res.send()
  } else {
    var updatedAlien = _.assign(aliens[alien])
    res.json(updatedAlien)
  }
})

app.delete('/aliens/:id', function (req, res) {
  var alien = _.findIndex(aliens, { id: req.params.id })
  if (!aliens[alien]) {
    res.send()
  } else {
    var deletedAlien = aliens[alien]
    aliens.splice(alien, 1)
    res.json(deletedAlien)
  }
})

app.listen(3500)
console.log('Server is listening')
