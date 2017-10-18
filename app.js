require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const HTTPError = require('node-http-error')
const { not, isEmpty, join, omit,path, merge,keys, prop, __, compose } = require('ramda')
const checkRequiredFields = require('./lib/check-required-fields')
const {addBeer} = require('./dal')
const port = process.env.PORT || 4000

console.log(`port set to ${port}`)

app.get('/', (req, res, next) =>
  res.send('Welcome to the Beer API. Manage and share all your favorite beers with fellow beer lovers.')
)

app.post('/beers',(req,res,next)=>{
  if(isEmpty(prop('body',req))){
    return next(new HTTPError(res.status(400),"No body was provided"))
  }
  const body = compose(
    omit(['_id', '_rev']),
    merge(__, { type: 'beer' }),
    prop('body')
  )(req)
  console.log('body',body)
  const requiredFields =["name","type","brewer","ABV","score","ratings"]
  const missingFields = checkRequiredFields(requiredFields,keys(body))
console.log('missingFields',missingFields)
  if (not(isEmpty(missingFields))){
    return next(new HTTPError(res.status(400), `Missing Required Fields:`)) // ${join(',',missingFields)}
  }

  addBeer(body)
  .then(response => res.status(201).send(response))
  .catch(err => next(new HTTPError(err.status, err.message)))
})
app.listen(port, ()=> console.log(`App listening on port: ${port}`))
