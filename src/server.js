const express = require('express')
const cors = require('cors')
const devRouter = require('./routes/dev')
const authRouter = require('./routes/auth')

const server = express()

server.use(cors())
server.use(express.json())
server.use('/dev', devRouter)
server.use('/auth', authRouter)

server.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'DevAPI10'
    })
})

module.exports = server
