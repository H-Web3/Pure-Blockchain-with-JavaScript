const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain'); //require the blockchian.js file
const bitcoin = new Blockchain(); //make an instance of Blockchain constr func and calling it with 'new' keyword

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
//In these above two lines, code tells that our content type is JSON


app.get('/blockchain', function (req, res) {   //make an end point 'blockchain'
  res.send(bitcoin);   //blockchain end point will show us all data available in bitcoin instance
});

app.post('/transaction', function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recepient);
  //call the function create new transaction method and parse its parameters
})

app.listen(3000, function()
{
  console.log("Server is running on port 3000")
})