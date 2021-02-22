const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!d');
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
}); 