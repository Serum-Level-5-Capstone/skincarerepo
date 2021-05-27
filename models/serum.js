const mongoose = require('mongoose')
const { __esModule } = require('uuid/dist/v1')
const { string, array } = require('yargs')
const Schema = mongoose.Schema

const serumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tag: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
})

    module.exports= mongoose.model("?", serumSchema)