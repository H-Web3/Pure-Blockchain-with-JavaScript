const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();// calling the construction function with new keyword and storing it in 'bitcoin' variable 

prevBlockHash = 'jcndfbhewiufhy328hfhwecnuheundifu4yh8h38rhruewr';
currentBlockData = [
    {
        amount: 100,
        sender: 'kjdbuwebfedfew',
        recepient: 'jnjkebfwubfueb'
    },
    {
        amount: 50,
        sender: 'dkjshweufhufe',
        recepient: 'fjcweiufhwiohqrqh8'
    }
];
console.log(bitcoin.hashBlock(prevBlockHash, currentBlockData, 27165));