const express = require('express')
const routes = express.Router()
const {fuelCreate,getoneUser,getUser,updateOne,deleteUser, deleteAll} = require('../Controllers/controller')



routes.get("/get/:id",getoneUser)
routes.patch("/patch/:id",updateOne)
routes.get("/get",getUser)
routes.post("/post", fuelCreate)
routes.delete("/delete/:id", deleteUser)
routes.delete("/clean", deleteAll)


module.exports= routes