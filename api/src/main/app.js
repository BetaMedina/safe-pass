const express = require('express')
const routeLoader = require('./config/loader-routes.js')
const cors = require('./middlewares/cors')

const app = express()
app.use(cors)
app.use(express.json())
routeLoader(app)

module.exports = app
