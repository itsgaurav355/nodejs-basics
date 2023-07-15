const express = require('express')
const {connectToDb, getDb } = require('./db')
//init app & middleware
const app = express()

//db connection
let db
connectToDb((err)=>{
    if(!err){
        app.listen(3000,() => {
            console.log("App listening on port 3000")
        })
        db = getDb() 
    }
})

//routes
app.get('/books',(req,res)=>{
    let books = []
    db.collection('Books')
    .find() // returns cursor or current object pointer used for access toArray and forEach
    .sort({author:1}) //returns cursor
    .forEach(book => books.push(book)) 
    .then(()=> {
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:"Could not fetch the documents"})
    })
   
})

app.get('/books/:id',(req, res) => {
    db.collection("Books")
})