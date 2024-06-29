const sha256 = require ('sha256');


function Blockchain (){
    this.chain = [];//this where our blocks or blockchain will store after mining
    this.pendingTransactions = [];//pending transactions 1st store here, then mine and then add to upper chain array       
}

Blockchain.prototype.createNewBlock = function(nonce, prevBlockHash, hash)//nonce basically a num which you get after proof of work
{
    const newBlock = {
        index: this.chain.length+1,
        timestamp: Date.now(),//javascript built-in method
        transactions: this.pendingTransactions,//which transactions that which is waiting in pending transaction array to mine 
        nonce: nonce,
        prevBlockHash: prevBlockHash,
        hash: hash,
    };

    this.pendingTransactions = [];//all pending transactions used in creating a new block, though this array should have empty 
    this.chain.push(newBlock);//push() Javascript built-in func which means add the object 'newBlock' in the chain array

    return newBlock;
}


/* What this above code will do? We create a constructor function named Blockchain having a chain array (all blocks which we create will store
in this array) and a pendingTransaction array (transactions which are waiting for to be mine will stay in this array).
Then we create a method named (createNewBlock) with the prototype property (means it will become the part of the above constructor function),
inside create an object which functions to create a block having six properties (states) (without any one of these properties, created block 
will be invalid) index(block num), timestamp, transactions (which have to be mined,i.e pending transactions), nonce, prevBlockHash and hash. 
After a block created, pending transactions are used, that's why we have to empty the array, that's why we use that code.
Then add the block to the chain array with the push method.
Summary: This code will collect all transactions in pending transactions array then create a new block which will go in the chain array and 
pending transactions will goes empty*/

Blockchain.prototype.getLastBlock = function() //this method will use to get the access to the last mined block from which we need some properties to mine the nest block
{
    return this.chain[this.chain.length - 1];  //this line of code take us to the chain array and give us the access to the previous block
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recepient) /*method to create a new transaction because without any 
pending transaction, we can't create any block*/
{
    const newTransaction = {  
        amount: amount,
        sender: sender,
        recepient: recepient
    };

    this.pendingTransactions.push(newTransaction); //this will push the new transaction into the pending transaction array

    return this.getLastBlock() ['index'] + 1;
}

/*hashBlock method will give us hash by taking the previousBlockHash, currentBlockData (transactions) and nonce, we will add them and put them 
into the sha256 algorithm which will give the hash*/

Blockchain.prototype.hashBlock = function(prevBlockHash, currentBlockData, nonce) 
{
    const dataAsString = prevBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    //This line of code will cancatenate all the parameters and save them in a variable "dataAsString" 
    /*toString() is a built method in js which converts a num into string and JSON.stringify() is also a built js method which converts a 
    JavaScript value (can be an array or object) to a JavaScript object notation string.*/

    const hash = sha256(dataAsString); //calling the sha256 algorithm putting the values in it and saving it in a variable "hash"
    
    return hash;
}

module.exports = Blockchain; //module.exports is function will export the construc func to the test.js file where we will import it