// after we install we have to require express
const express = require("express")
//all the express are app now
const app = express()

// after we install we have to required
const mongoose = require("mongoose")

// require the book from the ./model/bookModel
const Book = require('./model/bookModel') 

// multerConfig imports
// const multer = require("./middleware/multerConfig").multer 
// const storage = require("./middleware/multerConfig").storage    //this is bad practise because we can access
const {multer,storage} = require("./middleware/multerConfig")
const upload = multer({storage : storage});



// we have to add this code so that express is able  to understand and now bookName and price are shown in the trminal
app.use(express.json()) 

const ConnectionString = "mongodb+srv://asonaxaviersm1:sona@cluster0.lz3hfgo.mongodb.net/?retryWrites=true&w=majority"
async function connectToDatabse(){
    await mongoose.connect(ConnectionString)  

     console.log("Connected to db successfully")
}
connectToDatabse();


//----------------------------------------------            Create                    -------------------------------------
//operations from the ./model./bookSchema.js
app.post("/book",upload.single("image"),async(req,res)=>{
     console.log(req.body);

    const {bookPrice, bookName,isbnNumber,authorName,publishedAt,publication } = req.body;
    // console.log(bookName,bookPrice)// it will display the output and 

     // to add 
     await  Book.create({
        
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

//--------------------------------------------------         Read all book          ----------------------------------------------------------------------
// even ./book is same but they are different api because post and get are different
app.get("/book",async (req,res)=>{
        const books = await Book.find()
        res.status(200).json({
            message : "Books fetched successfully",
            data : books
            // This code will read the whole code in the .So, to read the specific book only we have to do this things

        })
    })


//---------------------------------------------read single book-------------------------------------
app.get("/book/:id",async (req,res)=>{
    // Here we can put / in id to but it will display that book only so to make it dynamic we have to use :
    
    // console.log(req.params.id)   // this will display the id of the books in terminal
    // to see the value which id is being display insert the folowing code
    const id = req.params.id
    const book = await Book.findById(id)    
     // if it find the id of that paticular than it will give the informations
// Notes-----------
// find will return array and findById return objects
    res.status(200).json({
        message : "Single Book Triggered",
        data :book
    })
})

//--------------------------------     update         ------------------------------------------------------
// somepeople must can edit the book list or any things, and that things can be done through _id of the book
// findByIdandUpdate() to update

app.patch("/book/:id",async (req,res)=>{
         const id = req.params.id; // id is the book you wanna update
         const {bookName,bookPrice,authorName,publication,publishedAt,isbnNumber} = req.body
         await Book.findByIdAndUpdate(id,{
            // what do you wanna update list down
            bookName,
            bookPrice,
            authorName,
            publication,
            isbnNumber,
            publishedAt
         })
res.status(200).json({
    message : "Book updated Successfully"
})

})

















// -------------------------           Delete    -------------------------
// findByIdAndDelete() to delete

app.delete("/book/:id",async(req,res)=>{
    const id = req.params.id
    await Book.findByIdAndDelete(id)
    res.status(200).json({
        message : "Book deletes successfully"
    })
    // delete will return null
    // find will return array
    // findById will return object
})






app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})