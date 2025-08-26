

const express= require("express")

const app = express();

app.use("/",(req,res,next)=>{
  console.log("you are in the first middle ware",req.url,req.method);
  res.send("<p>you ate i home page</p>")
 
})
app.use("/user",(req,res,next)=>{
  console.log("you are in the second middle ware",req.url,req.method);
  res.send('<p>welcome to learn backend </p>')
})

const PORT=3300;

app.listen(PORT,()=>{
    console.log(`your server is running at http://localhost:${PORT}`)
})