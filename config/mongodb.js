// MongoDB
const { MongoClient, ObjectId } = require('mongodb')
const databaseUrl = 'mongodb://127.0.0.1:27017/'

const client = new MongoClient(databaseUrl, { useUnifiedTopology: true })
client.connect()
// Query
const db = client.db('H8-FinalProject')

module.exports = db