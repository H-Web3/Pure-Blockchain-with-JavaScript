You can read the code easily because naming convention we use is according real world and self explanatory and obvoiusly, comments are also there to explain the line of codes.
<br>
Blockchain.js is the file where we write our code which will build a blockchain data structure 
<br>
test.js is the file where we test it by putting the values.
<br>
"Lecture # 7 Transaction method for Blockchain data structure", in this lecture we create two methods, "getLastBlock" which give us the access to the information which stored in previuosly mined block like hash and index number etc. Second method is "createNewTransaction" which creates new transaction having three properties amount, sender and recepient which then push that transaction into the pending transaction array. Then a new block will create or mined those pending transactions will go and mined in that block's transaction property and pending transaction array will go empty.