require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))

console.log("the db for indexing is : ", process.env.COUCHDB_URL+process.env.COUCHDB_NAME)
const db = new PouchDB(process.env.COUCHDB_URL+process.env.COUCHDB_NAME)

db.createIndex({
  index: {
    fields: ['type']
  }
}).then(()=> console.log("created type index"))
.catch(err => console.log("an error has occured while creating the type index: ", err))

db.createIndex({ index: { fields: ['name'] } })
  .then(() => {
    console.log('Created an index on the name field.')
  })
  .catch(err => console.log(err))

db.createIndex({ index: { fields: ['ratings','score','ABV'] } })
  .then(() => {
    console.log('Created an index on the rating & score & ABV field.')
  })
  .catch(err => console.log(err))
