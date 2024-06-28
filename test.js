const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();// calling the construction function with new keyword and storing it in 'bitcoin' variable 

bitcoin.createNewBlock(1234, 'chscheiohioijsddqwydbccwaq', 'hnxqdwdiyrtnnif3872fwws');//calling the method from constructor function and giving demi parameters 
console.log(bitcoin);//getting output

