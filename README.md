You can read the code easily because naming convention we use is according real world and self explanatory and obvoiusly, comments are also there to explain the line of codes.
<br>
Blockchain.js is the file where we write our code which will build a blockchain data structure 
<br>
test.js is the file where we test it by putting the values.
<br>
<br>
"Lecture # 7 Transaction method for Blockchain data structure", in this lecture we create two methods, "getLastBlock" which give us the access to the information which stored in previuosly mined block like hash and index number etc. Second method is "createNewTransaction" which creates new transaction having three properties amount, sender and recepient which then push that transaction into the pending transaction array. Then a new block will create or mined those pending transactions will go and mined in that block's transaction property and pending transaction array will go empty.
<br>
<br>
Lecture # 8 SHA256 Hashing Algorithm. in this lecture, we install the sha256 algorithm in vs code using command "npm i sha256 --save", after installation we require it, then write a function of "hashBlock" which will create a hash by taking three parameters like preBlockHash, currentBlockData and nonce. convert these values into string then add them and call the sha256 algorithm put it into it which will give us a hash. 
<br>
<br>
Lecture # 9 Proof Of Work Method. What is proof of work? Proof of Work provides security to our blockchain. 
<br>
We implement Proof of Work in this lecture by writing a function named "proofOfWork" taking two parameters previous block hash and current block data. In proof of Work, we implement a condition like stop the function whent the Hash first four digits will be '0'. The 'number' at which the function or generted hashes stops that number will be our nonce.
<br>
<br>
Lecture # 10 Proof of Work & Genesis Block. In this lecture, we create a genesis block by calling the "createNewBlock" methon in the blockchain constructor function giving it the dummy nonce, previous block hash and hash. Then test it which gives the genesis block.
<br>
"Lecture # 11 In this session, We will be accessing the blockchain data structure through a local server."
above is the lecture name in course.
<br>
In this lecture, we install express js in VScode to hit end points in browser. Also create a file name "api.js" in which we require express and we will create api's in that file. 