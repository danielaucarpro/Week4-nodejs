//Loading the crypto module in node.js
var crypto = require('crypto');
var process = require('process');


//test md5

//plaintext
let plainText = "Some mgs to change"
// console.log('Plaintext is: ' + plainText);

//creating hash object 
var hash = crypto.createHash('md5');
// console.log(hash);

//passing the data to be hashed
let data = ''; // create a variable with data
data = hash.update(plainText, 'utf-8'); // create a variable with data
//Creating the hash in the required format
let gen_hash = '';
gen_hash = data.digest('hex');
//Printing the output on the console
console.log("hash : " + gen_hash);

for (let i =0; i < 100; i++) {

}

