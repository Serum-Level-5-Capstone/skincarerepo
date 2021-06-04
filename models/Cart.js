const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Pass through props to the results. 

const cartSchema = new Schema({
    name: {
        type: String
    },
    tag: {
        type: String
    },
    description: {
        type: String
    },
    season: {
        type: String,
        enum: ["spring", "summer", "fall", "winter"]
    }, 
    image: {
        type: String
    }

})

module.exports = mongoose.model("Cart", cartSchema)