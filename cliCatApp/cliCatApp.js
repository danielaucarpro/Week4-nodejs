//importing core modules
const process = require('process');
const fs = require('fs');

const cmdLineArguments = process.argv[2];

switch (cmdLineArguments) {
    case '--createFile':
        fs.open(`${process.argv[3]}`, 'w', (err, file) => {
            if (err) throw err;
            console.log(`File ${process.argv[3]} created!`)
        })
        break;
    case '--writeFile':
        fs.writeFile(`${process.argv[3]}`, `${process.argv[4]}`, (err) => {
            if (err) throw err;
            console.log(`You wrote ${process.argv[4]}, at the ${process.argv[3]} file!`)
        })
        break;
    case '--appendFile':
        fs.appendFile(`${process.argv[3]}`, `${process.argv[4]}`, (err) => {
            if (err) throw err;
            console.log(`You appended ${process.argv[4]} text, at the ${process.argv[3]} file!`)
        })
        break;
    case '--deleteFile':
        console.log(`Are you sure you want to delete ${process.argv[3]} file? (-y/-n)`)
        if (process.argv[0] === '-y') {
            fs.unlink(`${process.argv[3]}`, (err) => {
                if (err) throw err;
                console.log(`You deleted the file ${process.argv[4]}!`)
            })
        } else if (process.argv[2] === '-n') {
            console.log(`The file wasn't deleted!`)
        }
        break;
    case '--listFiles':
        fs.readdir(`${process.argv[3]}`, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                console.log(file)
            });
        })
        break;
}