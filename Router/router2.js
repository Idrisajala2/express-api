const express = require ("express")
const routes = express.Router()

const {createproduct}=require("../Controllers/controller2")



routes.post("post",createproduct)


module.exports=routes