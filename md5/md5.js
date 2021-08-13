const md5 = require('md5');
const crypto = require('crypto');
const fs = require('fs');
const process = require('process');
const { create } = require('domain');

const cmdLineArguments = process.argv[2];

switch (cmdLineArguments) {
    case '--createFile':
        fs.writeFile(`${process.argv[3]}`, `${md5(process.argv[4])}`, (err)=>{
            if(err) throw err;
            console.log('You encrypted message is: ' + md5(`${process.argv[4]}`));
        })
        break;
}

//SHA examples using crypto

//hash obj
const hash = crypto.createHash('md5');
const hashHmac = crypto.createHmac('md5', 'mysecretkey');
//passing data to hash
let data = hash.update('daniel', 'utf-8'); // utf-8 is most common codification
let dataHmacMd5 = hashHmac.update('daniel');
//generating hash
let gen_hash = data.digest('hex');
let gen_hashHmacMd5 = dataHmacMd5.digest('hex');

//printing result
console.log('Hash with md5: ' + gen_hash);
console.log('Hash with md5 hmac: ' + gen_hashHmacMd5);


//using whirlpool
const hashW = crypto.createHash('whirlpool');
const hashWHmac = crypto.createHmac('whirlpool', 'mysecretkey');
//passing data to hash
let dataW = hashW.update('daniel', 'utf-8') // utf-8 is most common codification
let dataWHmac = hashWHmac.update('daniel')
//generating hash
let gen_hash_w = dataW.digest('hex');
let gen_hash_whmac = dataWHmac.digest('hex');

//printing result
console.log('Hash with whirlpool: ' + gen_hash_w);
console.log('Hash with whirlpool: ' + gen_hash_whmac);

//using SHA 1
const hashS1 = crypto.createHash('sha1');
//passing data to hash
let dataS1 = hashS1.update('daniel', 'utf-8') // utf-8 is most common codification
//generating hash
let gen_hash_s1 = dataS1.digest('hex');

//printing result
console.log('Hash with SHA 1: ' + gen_hash_s1);

//using SHA 224
const hashS224 = crypto.createHash('sha224');
//passing data to hash
let dataS224 = hashS224.update('daniel', 'utf-8') // utf-8 is most common codification
//generating hash
let gen_hash_s224 = dataS224.digest('hex');

//printing result
console.log('Hash with SHA 224: ' + gen_hash_s224);

//using SHA 256
const hashS256 = crypto.createHash('sha256');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
//passing data to hash
let dataS256 = hashS256.update('daniel', 'utf-8') // utf-8 is most common codification
let dataHmac = hmac.update('daniel') // utf-8 is most common codification
//generating hash
let gen_hash_s256 = dataS256.digest('hex');
let gen_hmac = dataHmac.digest('hex');

//printing result
console.log('Hash with SHA 256: ' + gen_hash_s256);
console.log('Hash with SHA 256 HMAC: ' + gen_hmac);

//using SHA 384
const hashS384 = crypto.createHash('sha384');
//passing data to hash
let dataS384 = hashS384.update('daniel', 'utf-8') // utf-8 is most common codification
//generating hash
let gen_hash_s384 = dataS384.digest('hex');

//printing result
console.log('Hash with SHA 384: ' + gen_hash_s384);

//using SHA 512
const hashS512 = crypto.createHash('sha512');
const hmac512 = crypto.createHmac('sha512', 'mysecretkey');
//passing data to hash
let dataS512 = hashS512.update('daniel', 'utf-8')
let dataHmac512 = hmac512.update('daniel') 
//generating hash
let gen_hash_s512 = dataS512.digest('hex');
let gen_hmac512 = dataHmac512.digest('hex');

//printing result
console.log('Hash with SHA 512: ' + gen_hash_s512);
console.log('Hash with SHA 512 HMAC: ' + gen_hmac512);

//using SHA ripemd160
const hashR = crypto.createHash('ripemd160');
//passing data to hash
let dataR = hashR.update('daniel', 'utf-8') // utf-8 is most common codification
//generating hash
let gen_hash_r = dataR.digest('hex');

//printing result
console.log('Hash with ripemd160: ' + gen_hash_r);