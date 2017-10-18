require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const HTTPError = require('node-http-error')
const { not, isEmpty, join, omit,path, merge, prop, __, compose } = require('ramda')
//const checkRequiredFields = require('./lib/check-required-fields')
const port = process.env.PORT || 4000

console.log(`port set to ${port}`)

app.get('/', (req, res, next) =>
  res.send('Welcome to the Beer API. Manage and share all your favorite beers with fellow beer lovers.')
)
