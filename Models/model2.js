const mongoose = require ("mongoose")
const fuelSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("production",fuelSchema)