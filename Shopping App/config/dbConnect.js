const {default: mongoose} = require("mongoose");

const dbConnect = () =>{
   try{
    const conn = mongoose.connect('mongodb://127.0.0.1:27017/shopping-app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0');
    console.log("Database connected Successfully")
   }catch(error){
    console.log("Database error");
   }
};

module.exports = dbConnect;
