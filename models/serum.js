const mongoose = require('mongoose')
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
    },
    seasonId: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Serum", serumSchema)