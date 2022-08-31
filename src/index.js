const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World 2234')
})

app.listen(3000, () => console.log('ONLINE http://localhost:3000'))