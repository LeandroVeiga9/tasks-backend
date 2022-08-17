const express = require('express')
const app = express()
const db = require('./config/db.js')
const consign = require('consign')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.db = db

app.listen(3000, () => {
  console.log('api started on port 3000');
})