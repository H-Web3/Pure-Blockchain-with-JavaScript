const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();// calling the construction function with new keyword and storing it in 'bitcoin' variable 

const prevBlockHash = "ndjkjhfuwhcoihfoihsoifuhn";
const currentBlockData = [
    {
        amount: 20,
        sender: "dskjchweeyhfihwfre",
        recepient: "oijdnewbvhgorih"
    },
    {
        amount: 10,
        sender: "kjgschgiyewfheiuofwhefb",
        recepient: "dshccjbvkjbhvweh"
    }
];

console.log(bitcoin.proofOfWork(prevBlockHash, currentBlockData));
