const http = require('http');


const server= http.createServer((req,res)=>{
   console.log(req.url,req.method)

   res.setHeader('Content-Type','text/html');
   res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home - Calculator App</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f4f9;
      color: #333;
    }
    header {
      background: #4CAF50;
      color: white;
      padding: 15px 20px;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    nav ul li {
      margin-left: 20px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    nav ul li a:hover {
      text-decoration: underline;
    }
    .container {
      text-align: center;
      padding: 60px 20px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.2rem;
      color: #555;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <h2>Calculator App</h2>
      <ul>
        <li><a href="calculator.html">Calculator</a></li>
        <li><a href="result.html">Result</a></li>
      </ul>
    </nav>
  </header>

  <div class="container">
    <h1>Welcome to Calculator Application</h1>
    <p>This simple web app helps you perform calculations quickly and view your results.</p>
  </div>
</body>
</html>
`);
res.end();
})
const PORT=4000;
server.listen(PORT,()=>{
    console.log(`your server is running at http://localhost:${PORT}`);
})