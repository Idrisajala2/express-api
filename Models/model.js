const mongoose= require('mongoose')
const fuelSchema= mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    location : {
        type: String,
        required: true
    }
})

module.exports=mongoose.model("fuelStation", fuelSchema)