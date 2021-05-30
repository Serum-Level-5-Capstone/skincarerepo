const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Pass through props to the results. 

const seasonsSchema = new Schema({
    name: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Seasons", seasonsSchema)