const express= require("express");
const bodyparser= require("body-parser")


const app= express();

app.use((req,res,next)=>{
    console.log("first dummy middleware", req.url,req.method);
    next()
})
app.use((req,res,next)=>{
    console.log("second dummy middleware", req.url,req.method);
    next()
})

app.get("/",(req,res,next)=>{
    console.log("home middleware", req.url,req.method);
    res.send("<p>welcome to compleat coding of backend</p>")
})

app.get("/contact-us",(req,res,next)=>{
    console.log("handling middleware", req.url,req.method);
    res.send(`<h1>please enter your ditails we ll come back to you</h1>
        <form action="/contact-us" method="POST">
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>`)
})
app.use(bodyparser.urlencoded())
app.post("/contact-us",(req,res,next)=>{
     console.log("we are in contactus post handle", req.url,req.method,req.body);
     res.send("<h1>please enter your ditails we ll come back to you</h1>")
})




const PORT=4100;

app.listen(PORT, ()=>{
    console.log(`your app is running at port http://localhost:4100`);
})