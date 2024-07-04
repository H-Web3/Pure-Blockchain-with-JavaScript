const express = require('express')
const app = express()

app.get('/blockchain', function (req, res) {
  res.send('Here we will show our complete blockchian')
})

app.post('/transaction', function (req, res) {
  res.send('Here we will call our create new transaction method from our blockchain data structure')
})

app.listen(3000, function()
{
  console.log("Server is running on port 3000")
})