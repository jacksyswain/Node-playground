const http= require("http");

const server= http.createServer((req,res)=>{
console.log(req.url,req.method);
if(req.url==="/home"){
    return res.write('<h1>welcome to home page</h1>')
}else if(req.url==="/product"){
    return res.write('<h1>welcome to product page</h1>')
}else if(req.url==="/men"){
   return res.write('<h1>welcome to men product page</h1>')
} else if(req.url==="/women"){
   return res.write('<h1>welcome to women product page</h1>')
}else if(req.url==="/kids"){
   return res.write('<h1>welcome to kids product page</h1>')
}
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navigation Bar Example</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* Navigation Bar */
    nav {
      background-color: #333;
      padding: 0.5rem 1rem;
    }

    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
    }

    nav ul li {
      margin: 0 15px;
    }

    nav ul li a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s ease;
    }

    nav ul li a:hover {
      color: #ff9800;
    }
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/product">Product</a></li>
      <li><a href="/men">Men</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/boys">Boys</a></li>
      <li><a href="/girls">Girls</a></li>
    </ul>
  </nav>

  <div style="padding: 20px;">
    <h1>Welcome!</h1>
    <p>This is a starter page with a navigation bar.</p>
  </div>

</body>
</html>
`)
res.end();
})
const PORT=3003;



server.listen(PORT,()=>{
    console.log(`server is running at localhost port :${3003}`)
})