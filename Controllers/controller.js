const fuelInfo= require('../Models/model')
const fuelCreate= async(req, res) => {
    try{
        const newStation= await fuelInfo.create(req.body)

        res.status(201).json({
            status: "success",
            data: newStation
        })
    }catch(err) {
        res.status(204).json({
            status: "fail", 
            message: "station cannot be created"
        })
    }
}
     const getUser = async (req,res)=>{
    try{
       const GetAll = await fuelInfo.find()
         res.status(201).json({message:"selected successfully",data:GetAll})
    }catch(err){

        console.log(error.message)
    }
}
const getoneUser =async(req,res)=>{
    try{
     const id = req.params.id
     const GetOne = await fuelInfo.findById(id)

     res.status(200).json({
        status:"success",
        data: GetOne
    })
    }catch(error){
        res.json({
            status:"fail",
            message: error.message
            
        })
    }
}
const updateOne = async (req,res)=>{
    try{
        // const value = await fuelInfo.findById(req.params.id).updateOne(req.body)
        // value.name = req.body.name,
        const value = await fuelInfo.findByIdAndUpdate(req.params.id, req.body)
       res.status(200).json({
           status: "success",
           data:{ 
               value
           }
       })
    }catch(error){
        res.json({
            status:"fail",
            message: error.message
        })
    }
}
const deleteUser = async (req,res)=>{
    try{
      const id = req.params.id
      const remove = await fuelInfo.findByIdAndDelete(id)
      res.status(204).json({
          status: "succes",
          data:remove
      })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const deleteAll = async (req,res)=>{
    try{
    //   const id = req.params.id
      const remove = await fuelInfo.deleteMany()
      res.status(204).json({
          status: "succes",
          data:remove
      })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}
module.exports ={
    fuelCreate,
    getUser,
    getoneUser,
    updateOne,
    deleteUser,
    deleteAll
}