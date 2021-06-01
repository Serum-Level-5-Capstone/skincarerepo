const express = require('express')
const serumRouter = express.Router()
const Serum = require('../models/Serum.js')


serumRouter.get("/", (req, res, next) => {
    serum.find((err, serums) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(serum)
    })
})

//Get single serum by season

// serumRouter.get("/results", (req, res, next) => {
//     serum.find((err, serums) =>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(serum)
//     })
// })
serumRouter.get("/mycart", (req, res, next) => {
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
        return res.status(200).send(`Successfully deleted ${deletedItem._id} from the database`)
})
})


serumRouter.put("/:serumId", (req, res, next) => {
    serum.findOneAndUpdate({_id: req.params.serumId},
        req.body, //update this obj with this data
         {new: true}, //sends back updated version 
         (err, updatedItem) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully updated ${updatedItem._id} in the database`)
})

})
    
   




module.exports = serumRouter