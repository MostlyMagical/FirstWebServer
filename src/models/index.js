// const { string } = require("mongoose")
const { string } = require("joi")
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

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema)

module.exports = {
    Film,
    User,
}