const mongoose = require('mongoose')
const { __esModule } = require('uuid/dist/v1')
const { string, array } = require('yargs')
const Schema = mongoose.Schema

//Pass through props to the results. 

const serumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    
    
    }
})

    module.exports= mongoose.model("Serum", serumSchema)