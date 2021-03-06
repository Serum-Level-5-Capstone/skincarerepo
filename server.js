const express =  require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/serumsitedb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("Connected to the DB")
)




app.use("/serums", require("./routes/serumRouter")) 
app.use("/my-cart", require("./routes/cartRouter")) 

app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, () => {console.log("Server is running on port 9000!" )})