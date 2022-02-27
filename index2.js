const express = require ("express")
const mongoose = require ("mongoose")
const port = 2024
const routes = require("./Router/router2")
const app =express()
 const url ="mongodb://localhost/production"

mongoose.connect(url).then()
app.use(express.json())
app.use("/api",routes)


app.listen(port,()=>{
    console.log(`listen on port:${port}`)
})