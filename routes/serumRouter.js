const express = require('express')
const serumRouter = express.Router()
const Serum = require('../models/Serum.js')

serumRouter.get("/", (req, res, next) => {
    Serum.find((err, serums) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(serums)
    })
})

//Get single serum by season
//Needed get request for specific serum, to display and for the proper cart to render which were selected. use a parameter either id or season to do the get request then use that in the route to display the json information from the database. use that to then send it as a parameter to the result page so the individual can check out with their desired product either by id or by season.
serumRouter.get("/results/:season", (req, res, next) => {
    const userSeason = req.params.season
    Serum.find({season: userSeason}, (err, result) => {
        if(err) {
            return res.status(500)
            next(err)
        }
        return res.status(200).send(result)
    })
})
    

serumRouter.post("/", (req, res, next) => {
    const newSerum = new Serum(req.body)
    newSerum.save((err, savedSerum) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedSerum)


    })
})

serumRouter.delete("/:serumId", (req, res, next) => {
    Serum.findOneAndDelete({ _id: req.params.serumId },
        (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem._id} from the database`)
        })
})


module.exports = serumRouter