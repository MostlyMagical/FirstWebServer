require("./db/connection")
const express = require("express")
const cors = require("cors")
const app = express()
const helloRouter = require('./routes')

app.use(express.json())
app.use(cors())

app.use(helloRouter)

app.listen(5000, ()=>{
    console.log("listening on port 5000")
})