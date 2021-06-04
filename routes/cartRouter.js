const express = require('express')
const cartRouter = express.Router()
const Cart = require("../models/Cart.js")


cartRouter.get("/", (req, res, next) => {
    Cart.find((err, cart) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cart)
    })
})

cartRouter.post("/", (req, res, next) => {
    const newCart = new Cart(req.body)
    newCart.save((err, savedCart) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedCart)


    })
})

cartRouter.delete("/:serumId", (req, res, next) => {
    Cart.findOneAndDelete({ _id: req.params.serumId },
        (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem._id} from the database`)
        })
})

module.exports = cartRouter