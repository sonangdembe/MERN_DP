  
// to comminicated with the systema
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        unique : true,
        required : true // this must be required shouldn't be null

    },
    bookPrice :{
        type : Number
    },
    isbnNumber :{
        type : Number
    },
    authorName : {
        type : String
    },
    publishedAt :{
        type : String
    },
    // to add just add here like publications
    publication : {
        type : String
    }
})

const Book = mongoose.model('Book', bookSchema) 
// here Variable name is kept same as the  "Book' and Book is the final output  
// this Book is used for to read, delete, update and other things too int the database\


// Notes-----------
// Book initilized here becames the plural and all will be in small letter 

module.exports = Book  // this is expoted to the 
/// Now if we run the code table is not visible still, it will be visible unless  we prform any task in it 
// So, we have to perform the operation in it and now that operations is performed at the app.js
