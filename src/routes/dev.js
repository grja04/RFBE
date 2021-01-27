
const express = require('express')
const dev = require('./../usecases/dev')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', authMiddleware, async (request, response) => {
    const allDev = await dev.getAll()

    response.json({
        success: true,
        data : allDev
    })
})

router.post('/', async (request, response) => {
   const { post } = request.body
    const devCreated = await dev.create(post)

    response.json({
        success: true,
        data: devCreated
    })
})

module.exports = router