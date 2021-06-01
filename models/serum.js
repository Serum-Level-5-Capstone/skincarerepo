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
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"],
        required: true
    }, 
    image: {
        type: String,
        required
    }

})

module.exports = mongoose.model("Serum", serumSchema)