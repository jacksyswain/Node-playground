const http= require("http");
const {requestHandler}= require("./handler.js")

const server= http.createServer(requestHandler)


const PORT=3200;

server.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})