

const Dev = require('./../models/dev')

function getAll () {
    return Dev.find({})
}

function create (post) {
    return Dev.create({ post })
}



module.exports = {
    getAll,
    create,
    
}