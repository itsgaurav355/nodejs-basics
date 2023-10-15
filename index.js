// const http = require("http");
// import http from "http"
// import {generateLovePercent} from "./features.js";
import express from "express";
import path from "path";
import mongoose from "mongoose";
const app = express();
//Db
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend"
}).then(()=> console.log("Database Connected")).catch((e)=>console.log(e));

const messageSchema = new mongoose.Schema({
    name:String,
    email:String,
});

const Message = mongoose.model("Messages",messageSchema)

//use is used for using middlewares
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended: true}))

//Setting up view Engine
app.set("view engine","ejs");
//Without mongo db 
/* console.log());
app.get("/",(req,res,e)=>{
    res.render("index");
});


// console.log(generateLovePercent());

// const server = http.createServer((req,res)=>{
//     if(req.url === "/about"){
//         res.end("<h1>About Page</h1>");
//     }
//     if(req.url=== "/"){ 
//         res.end("<h1>Home Page</h1>");
//     }else{
//         res.end("<h1>Error </h1>")
//     }
// });

app.post("/",(req,res)=>{
    console.log(req.body.name);
    users.push({username:req.body.name, email:req.body.email});
    res.redirect("/success");
});

app.get("/users",(req,res)=>{
    res.json(
        {
            users
        }
    )
})
*/

//with Mongo db 
app.get("/add",async (req,res)=>{
    await Message.create({name:"Gaurav",email:"sample@gmail.com"});
    res.send("All cool")
});

app.get("/success",(req,res,e)=>{
    res.render("success");
});


app.post("/",async (req,res)=>{
    const {name,email} = req.body;
    await Message.create({name , email});
    res.redirect("/success");
});

app.listen(5000,()=>{
    console.log("Server is working");
});