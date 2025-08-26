const express = require("express")

const app= express();
app.use((req,res,next)=>{
    console.log(req.url,req.method);
   next()
})

app.use(express.urlencoded());

app.get("/",(req,res,next)=>{
    console.log(req.url,req.method);
    res.send(`<h1>resister to airbnb</h1>
        <a href="/add-home">add home</a>`)
})
app.get("/add-home",(req,res,next)=>{
    console.log(req.url,req.method);
    res.send(`<form action="/add-home" method="POST">
      <input type="text" name="name" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>`)
})
app.post("/add-home",(req,res,next)=>{
    console.log(req.body)
    console.log(req.url,req.method);
    res.send(`<h1> you are logedin successfully</h1>`)
})


const PORT=4300;
app.listen(PORT,()=>{
    console.log("your app i running at port 4300")
})