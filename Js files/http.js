const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/"){
    res.end("Welcome to node js page")
  }
  if(req.url === '/about'){
    res.end("developed by Gaurav Prajapati");
  } 

  res.end(
    `<h1>Oops!</h1>
    <p>Page does not exist here please add a corrent URL</p>
    <a href="/" >Go to Home</a>`
  )
  
})

server.listen(5000);
