const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Pass through props to the results. 

const cartSchema = new Schema({
    serumId: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Cart", cartSchema)