const { sumHandler } = require('./sumReq.js');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator Application</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; background: #f9f9f9; }
    nav { background: #333; padding: 10px 20px; }
    nav ul { list-style: none; margin: 0; padding: 0; display: flex; }
    nav ul li { margin-right: 20px; }
    nav ul li a { text-decoration: none; color: #fff; font-size: 16px; }
    nav ul li a:hover { color: #ff9800; }
    .container { padding: 40px; text-align: center; }
    .container h1 { font-size: 28px; color: #333; }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="/calculator">Calculator</a></li>
      <li><a href="/result">Result</a></li>
    </ul>
  </nav>
  <div class="container">
    <h1>Welcome to Calculator Application</h1>
  </div>
</body>
</html>`);
    return res.end();

  } else if (req.url === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator Form</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; display: flex; justify-content: center; align-items: center; height: 100vh; }
    .calc-box { background: #fff; padding: 25px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; width: 300px; }
    .calc-box h2 { margin-bottom: 15px; color: #333; }
    .calc-box input[type="number"] { width: 90%; padding: 10px; margin: 8px 0; border: 1px solid #ccc; border-radius: 5px; }
    .calc-box input[type="submit"] { width: 100%; padding: 10px; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-top: 10px; }
    .calc-box input[type="submit"]:hover { background: #ff9800; }
  </style>
</head>
<body>
  <div class="calc-box">
    <h2>Calculator Form</h2>
    <form action="/result" method="POST">
      <input type="number" name="num1" placeholder="Enter first number">
      <input type="number" name="num2" placeholder="Enter second number">
      <input type="submit" value="Sum">
    </form>
  </div>
</body>
</html>`);
    return res.end();

  } else if (req.url.startsWith('/result') && req.method === 'POST') {
    return sumHandler(req, res);

  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
};

exports.requestHandler = requestHandler;
