const http= require("http");

const server= http.createServer((req,res)=>{
 
 res.setHeader('Content-Type','text/html');
 res.write('<html>')
 res.write('<head><title>nodejs coding</title></head>')
 res.write('<body><h1>like /share</h1></body>')
 res.write('</html>')
 res.end();
})
const PORT=3001;

server.listen(PORT,()=>{
    console.log(`server is running at port:${3000}`)
})