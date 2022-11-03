const http = require('http');
const url = require('url');
const fs = require('fs');
const p = require("path");


const PORT = 5500 
const lookup = require('mime-types').lookup;

const server =  http.createServer( (req,res) =>{
    let parseUrl =  url.parse(req.url,true);
    let path = parseUrl.path

    let file = "";
    
    if(path == "/"){
        path = "index.html"
        console.log(`request path ${path}`);
        file = p.join(__dirname, "..", "frontend","index.html");    
    }
    
    file = p.join(__dirname,"..","frontend",path);
        
    fs.readFile(file, function(e,content){
    
        if(e){
            console.log(`file not found ${file}`);
            res.writeHead(404);
            res.end();
        }else{
           
            console.log(`Returning ${path}`);
            res.setHeader("X-Content-Type-Options","nosniff");
            let mime = lookup(path);
            res.writeHead(200,{"Content-type":mime})
            res.end(content);
        }
    })
})


server
.listen(    PORT,
            "localhost" ,
            ()=> console.log(`Serving at port : localhost:${PORT}`)
        );


