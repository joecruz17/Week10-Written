const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {type: String, require: true },
    price: { type: number, require: true},
    readyToBuy: Boolean

})

module.exports = Item = mongoose.model('Item', itemSchema)