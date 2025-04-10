const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Authentication Test</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f7fa;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #333;
        }
        .container {
          text-align: center;
          background-color: white;
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-width: 90%;
          width: 500px;
        }
        h1 {
          color: #3498db;
          margin-bottom: 1rem;
        }
        .message {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .coming-soon {
          font-weight: bold;
          font-size: 1.5rem;
          color: #2c3e50;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }
        .checkmark {
          color: #2ecc71;
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="checkmark">✓</div>
        <h1>Authentication Successful!</h1>
        <div class="message">
          If you can see this page, basic auth is properly configured and working.
        </div>
        <div class="coming-soon">
          Covenant Match App<br>Coming Soon
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`);
});