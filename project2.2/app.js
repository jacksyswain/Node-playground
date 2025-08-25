const http= require("http");

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
 res.write('<html>')
 res.write('<head><title>nodejs coding</title></head>')
 res.write('<body><h1>like /share</h1></body>')
 res.write('</html>')
 res.end(); 
    } else if(req.url==='/home'){
       res.setHeader('Content-Type','text/html');
 res.write('<html>')
 res.write('<head><title>nodejs coding</title></head>')
 res.write('<body><h1>welcome to home page</h1></body>')
 res.write('</html>')
 res.end();
    }else if(req.url==='/user'){
         res.setHeader('Content-Type','text/html');
 res.write('<html>')
 res.write('<head><title>nodejs coding</title></head>')
 res.write('<body><h1>you need to log in first</h1></body>')
 res.write('</html>')
 res.end();
    }else{
         res.setHeader('Content-Type','text/html');
 res.write('<html>')
 res.write('<head><title>nodejs coding</title></head>')
 res.write('<body><h1>page not found</h1></body>')
 res.write('</html>')
 res.end();
    }
})

const PORT=3002;

server.listen(PORT,()=>{
    console.log(`server is running at port :${PORT}`)
})