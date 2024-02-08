const express = require('express')
// to unbox  or to use the install express we have to render here because we need express here [ it is holld using required]
   const app = express()

// const app =  require('express')   we asssignn the express in app



app.get("/",(req,res)=>{
// res.send("Hello world");
res.send("Hello  ahah world this is added");
})




app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})

