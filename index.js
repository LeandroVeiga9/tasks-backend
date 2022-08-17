const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('meu backend')
})

app.listen(3000, () => {
  console.log('api started on port 3000');
})