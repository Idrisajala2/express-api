const express= require('express')
const mongoose= require('mongoose')
const routes= require('./Router/router')
const app = express()
const port= 2023;
const url = "mongodb+srv://idrisolas:Kendrick12@cluster0.ustoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(() => {
    console.log("Connected...");
}).catch((err)=> {
    console.log(err);
})


app.use(express.json())
app.use("/api", routes)

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})