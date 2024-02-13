// to configure the multer 
const multer = require('multer')

const storage = multer.diskStorage({
    // here we will define the functions
    destination : function(req,file,cb){
      cb(null,'./storage') // cb(error, success)
    },
    // here destinations is the  plcae where the system will be placed
    //filename is the name of the file how you wanna added
    finename : function(req,res){
      cb(null,Date.now()+"-" + file.orginalname)

    }

})

module.export = {
  storage,
  multer
  // storage :strorage,
  // multer: multer
}