const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const server = express()

mongoose.connect('mongodb+srv://matheus:matheus@cluster0-msrfg.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3333)