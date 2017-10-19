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
const getBeer = id => get(id)
const updateBeer = doc =>update(doc)
const deleteBeer = id => {
  console.log("in deleteBeer")
  return deleteDoc(id)
}
//////////////////////////////
///        HELPERS
//////////////////////////////
const add = doc => db.put(doc)
const get = id => db.get(id)
const update = doc => db.put(doc)
//const deleteDoc = id => db.remove(id)

function deleteDoc(id){
  console.log("in deleteDoc")
  return db.get(id).then(doc => db.remove(doc))
}


module.exports = {addBeer,getBeer,updateBeer,deleteBeer}
