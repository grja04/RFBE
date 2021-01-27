
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/users')

async function signup (email, password) {
    const passwordEncripted = await bcrypt.hash(password, 10)
    return User.create({ email, password: passwordEncripted })
}

async function login (email, password) {
    const userFound = await User.findOne({email})

    if (!userFound) throw new Error('Invalid Data')
    
    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    if (! isPasswordValid) throw new Error ('Invalid data')

    const token = jwt.sign({ id: userFound._id}, 'dev123')

    return token 
}

module.exports = {
    signup,
    login
}