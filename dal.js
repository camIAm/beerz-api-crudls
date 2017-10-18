require('dotenv').config()

const PouchDB = require('pouchdb')
const pkGen = require('./lib/primary-key-generator')
const dbUrl = process.env.COUCHDB_URL
const dbName = process.env.COUCHDB_NAME
const {prop} = require('ramda')
console.log('db is' + dbUrl + dbName)

const db = new PouchDB(dbUrl + dbName)

const addBeer = (beer) => {
  beer._id = pkGen('beer', '_', prop('name',beer))
  return add(beer)
}



//////////////////////////////
///        HELPERS
//////////////////////////////
const add = doc => db.put(doc)


function get(id, callback) {
  db.get(id, function(err, data) {
    if (err) return callback(err)
    callback(null, data)
  })
}

function update(doc, callback) {
  db.put(doc, function(err, data) {
    if (err) return callback(err)
    callback(null, data)
  })
}

function deleteDoc(id, callback) {
  db.get(id, function(err, data) {
    if (err) return callback(err)

    db.remove(data, function(err, removedResult) {
      if (err) return callback(err)
      callback(null, removedResult)
    })
  })
}


module.exports = {addBeer}
