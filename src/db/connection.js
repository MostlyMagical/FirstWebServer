const mongoose = require("mongoose")
// mongoose.Schema.Types.Boolean.convertToFalse.add('');
require("dotenv").config()

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("we have success")
    } catch(error) {
        console.log(error)
    }
}

connection()