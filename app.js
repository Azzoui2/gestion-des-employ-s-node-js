const express = require('express');
const app = express();
const port = 3003;
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
