const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Pass through props to the results. 

const cartSchema = new Schema({
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
        enum: ["spring", "summer", "fall", "winter"],
        required: true
    }, 
    image: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Cart", cartSchema)