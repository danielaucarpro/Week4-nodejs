const md5 = require('md5');
const fs = require('fs');
const process = require('process');

const cmdLineArguments = process.argv[2];

switch (cmdLineArguments) {
    case '--createFile':
        fs.writeFile(`${process.argv[3]}`, `${md5(process.argv[4])}`, (err)=>{
            if(err) throw err;
            console.log('You encrypted message is: ' + md5(`${process.argv[4]}`));
        })
        break;
}