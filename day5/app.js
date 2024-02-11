const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const Book = require('./model/bookModel') // require the book from the ./model/bookModel


app.use(express.json()) // we have to add this code so that express is able  to understand and now bookName and price are shown in the trminal


const ConnectionString = "mongodb+srv://asonaxaviersm1:sona@cluster0.lz3hfgo.mongodb.net/?retryWrites=true&w=majority"
async function connectToDatabse(){
    await mongoose.connect(ConnectionString)  

     console.log("Connected to db successfully")
}
connectToDatabse();


//----------------------------------------------------------Create ------------------------------------------------------------
//operations from the ./model./bookSchema.js
app.post("/book",async(req,res)=>{
     console.log(req.body); // Now check in postman using the url'http//:localhost:3000/book" using the POST then send the request And you will not get any data you will just see the sending request. So, send the data
     // now have to send the data from the postman becausse in backend there will be any frontend so now you have to use the postman as the frontend.So, now from the postman you will send the data and think that data came from the frontend,nodejs,etc;
     //1. select the 'body' from the postman
     //2.  Then there there is the  'none' click
     //3. Choose the 'raw'
     //4. Choose the  'JSON'
     // body > none > raw > JSON
     // Use the json format and send the request  but still it will not show the responses and now if you put the 'req.body' then only you will get the results
     //But undefine is shown for that add "app.use(express.json()) " this code again run the postman and then you view the result 

    //  console.log(req.body.bookPrice);  // to display the only one of the list of the price
    //  console.log(req.body.bookName); // This will  display the bookName  after we send request from the postman and but to type such manually we feel irritted so, we use destructure

    const {bookPrice, bookName,isbnNumber,authorName,publishedAt,publication } = req.body;
    // console.log(bookName,bookPrice)// it will display the output and 

     // to add 
     await  Book.create({
        // bookName : bookName,
        // bookPrice : bookPrice,
        // isbnNumber : isbnNumber,
        // authorName : authorName,
        // publishedAt : publishedAt
          // in Js if there is same in rightSide and leftSide then you can wtite as
        bookName,
        bookPrice,
        isbnNumber,
        authorName,
        publishedAt,
        publication 

     })
     res.status(201).json({
        message : " Book created Sucessfully"
     })
// Check the  db then
    })   

// and to add the more books just edit  the postman author and otheres you wanna edit then it will show the result in the table
// _id has the different number from each other abd you can neglate it too

//--------------------------------------------------------------Read----------------------------------------------------------------------
// even ./book is same but they are different api because post and get are different

    app.post("/book",async(req,res)=>{
        Book.find()
    })

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})