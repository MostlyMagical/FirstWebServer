// const { string } = require("mongoose")
const mongoose = require("mongoose")

const filmSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    actor: {
        type: String,
    },
    watched: {
        type: Boolean,
        required: true,
        default: false,
    }
})

const Film = mongoose.model("Film", filmSchema)

module.exports = Film