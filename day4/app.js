const express = require('express')
// to unbox  or to use the install express we have to render here because we need express here [ it is holld using required]
   const app = express()
   // const app =  require('express')   we asssignn the express in app


const mongoose = require('mongoose')                                                                                                                                     // mongoose is installed using <npm install mangoose> and then we have to abstract here


const ConnectionString = "mongodb+srv://asonaxaviersm1:sona@cluster0.lz3hfgo.mongodb.net/?retryWrites=true&w=majority"

async function connectToDatabse(){
    await mongoose.connect(ConnectionString)  

     console.log("Connected to db successfully")
}
connectToDatabse();


app.get("/",(req,res)=>{

// res.send("Hello world");
// const person={
//     name : 'sonna',
//     age :23
// }


res.status(200).json({
    "message": 'succes',
  
})

})




app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})