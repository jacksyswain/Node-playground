const fs= require('fs');

const userHandler= (req, res) => {

  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader('Content-Type','text/html')
    res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Form</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-box {
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      width: 300px;
    }

    .login-box h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    .login-box input[type="text"],
    .login-box input[type="password"] {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
    }

    .login-box input[type="submit"] {
      width: 100%;
      padding: 10px;
      background: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }

    .login-box input[type="submit"]:hover {
      background: #ff9800;
    }
  </style>
</head>
<body>

  <div class="login-box">
    <h2>Login</h2>
    <form action="/user" method="POST">
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
  </div>

</body>
</html>
            `);

    return res.end();
  } else if (req.url.toLowerCase() === "/user" && req.method === "POST") {
    fs.writeFileSync('user.txt','prakash swain')
    res.statusCode=302;
    res.setHeader('Location','/')
    res.write(`<h1>congrats you are the tew user</h1>`);
    return res.end();
  }

    const body = [];
  req.on("data", chunk => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    const fullbody = Buffer.concat(body).toString();
    console.log(fullbody);
    const params= new URLSearchParams(fullbody);
    // const bodyobject={};
    // for(const [key,val] of params.entries()){
    //     bodyobject[key]=val;
    //     console.log(bodyobject);
    // }
    const bodyobject= Object.fromEntries(params);
    console.log(bodyobject)
    fs.writeFileSync('user.txt',JSON.stringify(bodyobject));
  });
};

module.exports = userHandler;