const express = require('express');
const app = express();
const bodyParser = require('body-parser');

  //requiring the third party module which will create a unique string for the node(recepient) address to make a difference between miner's addresses
const { v4 : uuidv4} = require('uuid');
const nodeAddress = uuidv4().split('-').join(''); //this will remove the dashes from the uuid string

const Blockchain = require('./blockchain'); //require the blockchian.js file
const bitcoin = new Blockchain(); //make an instance of Blockchain constr func and calling it with 'new' keyword

//In these above two lines, code tells that our content type is JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

/*---------------------------------------------------------------*/
//This will give us complete Blockchian
app.get('/blockchain', function (req, res) {   //make an end point 'blockchain'
  res.send(bitcoin);   
});

/*---------------------------------------------------------------*/
//This is for creating New Transaction
app.post('/transaction', function (req, res) {
  //call the function create new transaction method and parse its parameters
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recepient);
  
//res method will show us note that our transaction will be added in the next block
  res.json({note : `This transaction will be added in block ${blockIndex}`});
})

/*--------------------------------------------------------------*/
//Mine a new block
app.get('/mine', function (req, res){

    //call the getLastBlock method to get its "hash" property which act as "prevBlockHash" parameter
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];

    //call the pendingTransactions array which we want in proofOfWork method's "currentBlockData" parameter
  const currentBlockData = {
    transactions : bitcoin.pendingTransactions,
    index : lastBlock['index'] + 1  //telling the object, give these transactions to the next block
  };

    //calling the proofOfWork method to get the "nonce" 
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

    //calling the hashBlock method for the "hash" parameter of "createNewBlock" method
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    //when a block mined, miner gets a reward for it, this will create that transaction to the miner(recepient) address
  bitcoin.createNewTransaction(3.125, '000000000000', nodeAddress);

    //calling the createNewBlock method to mine a new block
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash); 

    //writing the response in case our endpoint run successfully  
res.json({
    note : "New block mined successfully",
    block : newBlock
  });
});

/*----------------------------------------------------------------------*/
app.listen(3000, function()
{
  console.log("Server is running on port 3000")
})