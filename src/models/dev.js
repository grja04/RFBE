
const mongoose = require ('mongoose')

const schema = new mongoose.Schema({
    post: {
        type: String, 
        mindlength : 100, 
        maxlength: 2500, 
        trim: true, 
        required: true
    }
})

const model = mongoose.model ('dev', schema)

module.exports = model