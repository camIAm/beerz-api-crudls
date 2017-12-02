require('dotenv').config()
const express = require('express')
const app = express()
const beer = require('./route/beer-route')

const port = process.env.PORT || 4000

console.log(`port set to ${port}`)

app.get('/', (req, res, next) =>
  res.send('Welcome to the Beer API. Manage and share all your favorite beers with fellow beer lovers.')
)

app.use('/beers',beer)

app.use((err,req,res,next)=>{
  console.log("Error status: ",err.status," Error message: ",err.message)
  res.status(err.status)
  res.send(err)
})
app.listen(port, ()=> console.log(`App listening on port: ${port}`))
