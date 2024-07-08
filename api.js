const express = require('express');
const app = express();
const Blockchain = require('./blockchain'); //require the blockchian.js file
const bitcoin = new Blockchain(); //make an instance of Blockchain constr func and calling it with 'new' keyword

app.get('/blockchain', function (req, res) {   //make an end point 'blockchain'
  res.send(bitcoin);   //blockchain end point will show us all data available in bitcoin instance
});

app.post('/transaction', function (req, res) {
  res.send('Here we will call our create new transaction method from our blockchain data structure')
})

app.listen(3000, function()
{
  console.log("Server is running on port 3000")
})