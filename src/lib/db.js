
const mongoose = require('mongoose')

const url = 'mongodb+srv://Antonio:308035928@practicadecimageneracio.ew6zl.mongodb.net/test'

const connect = mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology: true})

module.exports = {
    connect
}