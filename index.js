const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use('/media', express.static('media'))
  let route = require('./app/routes/route.js');
  route.handleRequest(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})