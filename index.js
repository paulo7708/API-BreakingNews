const express = require('express');

const app = express();

app.get("/home", (req, res) => {
  res.send('hello world')
});

app.listen(3000);