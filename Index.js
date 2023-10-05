const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile('inicio.html');
})

app.listen(3000)