const product = require ("../Models/model2")


// const creates = {name:req.body.name,
// location:req.body.location,
// createdAt:req.body.CreatedAt}
const createproduct = async (req,res)=>{
try{
    const oilProduction = await product.create(req.body)
        // name:req.body.name,
        // location:req.body.location,
        // createdAt:req.bod
    

    res.status(200).json({
     status:"'success",
      data:oilProduction  
    })
}catch(error){
    res.status(204).json({message:error.message})
}

}
module.exports={
   createproduct
}