const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();// calling the construction function with new keyword and storing it in 'bitcoin' variable 

bitcoin.createNewBlock(1234, 'chscheiohioijsddqwydbccwaq', 'hnxqdwdiyrtnnif3872fwws');//calling the method from constructor function and giving demi parameters 
bitcoin.createNewBlock(56789, 'hfidfhiefiefdwerere', 'ifhewiufhfuwehwif');

bitcoin.createNewTransaction(100, 'senderaddressone', 'recepientaddressone');
bitcoin.createNewTransaction(50, 'senderaddresstwo', 'recepientaddresstwo');
bitcoin.createNewTransaction(40, 'senderaddressthree', 'recepientaddressthree');

bitcoin.createNewBlock(101112, 'previousblockhash', 'currentblockhash');

console.log(bitcoin);//getting output
