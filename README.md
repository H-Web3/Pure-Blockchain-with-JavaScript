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
<br>
Lecture # 12 Accessing the Blockchain through an Api/server.
<br>
Main focus is to make our developing environment better.
<br> 
In this lecture, we learn the 'get' and 'post' methods. 'get' method takes two parameters, first one we write an 'end point' and in the second one, we write a req,res function, which we also called 'objects'. 'req' will send data from client to server side and 'res' send data from server to client side. 
<br>
'get' http method will get data from server side to client side and 'post' http method side will from client side to server side.
<br>
install nodemon to refresh the changes automatically   
<br>
Lecture # 13 Accessing the blockchain through an API/Server Part three.
<br>
In this lecture, first we require the blockchain.js file to the api.js because we want to make an end point which we will access and it will show us all the blocks avalaible in the chain array.
<br>
Insatll body-parser which collects our data and take it to the postman. Then require it in the api.js file and also tell the code that the content type is JSON.
<br>
Lecture # 14 Accessing the blockchain through an API/Server Part Four. In this lecture, we write a method to mine a new block which take three parameters nonce, prevBlockHash and hash. We got the previous block hash from calling the getLastBlock method which gives all information of previous block from which we fetch it's hash, acting as prevBlockHash in this block. 
<br>
Calling the proofOfWork will give us the nonce, this nonce takes two parameters prevBlockHash(which we can get from the above method) and currentBlockData (pending transactions array).
<br>
<br>
Lecture # 15 A Simple wallet for creating new transactions in blockchain datastructure. In this lecture, we create a simple web wallet using HTML having three inout fields amount, sender and recipient.
<br>
Then we write two endpoints: get endpoint to send the inex.html file from server to the browser and post endpoint to take the inputs from the browser to the server.
<br> 
Lecture # 16 Creating multiple nodes for decentralized network. Part one.....In this lecture, basically, we create multiple nodes to make the decentralized environment but, also create a port variable which will set the port numbers on which express server will listen the incoming requests when the nodeJS process launched.
<br>
Lecture # 17 Connecting all nodes in a network. Part one...., In this lecture, we try to connect all the nodes so that they communicate with each other and make a decentralized environment. Practically, we create three POST endpoints which will register a new node and broadcast(give every node in network, its URL) it in the network then the new node will accept other nodes already available in the network.