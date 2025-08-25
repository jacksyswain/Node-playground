const http=require('http');
const userHandler= require("./user.js")

const server= http.createServer(userHandler);

const PORT=3400;

server.listen(PORT,()=>{
    console.log(`your server is running at port:${PORT}`);
})