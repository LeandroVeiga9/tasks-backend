const bodyParser = require('body-parser')
const cors = require('cors')

module.eports = app => {
  app.use(bodyParser.json())
  app.use(cors({
    origin: '*'
  }))
}