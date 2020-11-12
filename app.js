// Express
const express = require('express')
const routes = require('./routes')
const app = express()
const PORT = 5001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

// Controller

// target CRUD client server

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
