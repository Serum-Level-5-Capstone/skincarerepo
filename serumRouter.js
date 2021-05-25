const express = require('express')
const serumRouter = express.Router()
const serum = require('./models/serum.js')


serumRouter.get("/", (req, res, next) => {
    serum.find((err, serums) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(serum)
    })
})

serumRouter.post("/", (req, res, next) =>
{
    const newSerum = new serum(req.body)
    newSerum.save((err, savedSerum) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedSerum)


    })
})
serumRouter.delete("/:serumId", (req, res, next) =>
{serum.findOneAndDelete({_id: req.params.serumId},
    (err, deletedItem) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstName} from the database`)
})
})


serumRouter.put("/:bountyId", (req, res, next) => {
    serum.findOneAndUpdate({_id: req.params.serumId},
        req.body, //update this obj with this data
         {new: true}, //sends back updated version 
         (err, updatedItem) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully updated ${updatedItem.firstName} in the database`)
})

})
    
   




module.exports = serumRouter