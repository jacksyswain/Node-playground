const sumHandler = (req, res) => {
  console.log("You are in sumHandler");

  const body = [];
  req.on("data", chunk => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    const num1 = parseFloat(bodyObj.num1) || 0;
    const num2 = parseFloat(bodyObj.num2) || 0;
    const result = num1 + num2;

    console.log("Result:", result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head><title>Result</title></head>
      <body>
        <h1>Result: ${result}</h1>
        <a href="/">Go Home</a>
      </body>
      </html>
    `);
    res.end();
  });
};

export { sumHandler };