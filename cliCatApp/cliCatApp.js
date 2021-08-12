//importing core modules
const process = require('process');
const fs = require('fs');
const readline = require('readline');
const readlineSync = require('readline-sync');

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
        // console.log(`Are you sure you want to delete ${process.argv[3]} file? (-y/-n)`)
        // process.stdin.resume();
        if (readlineSync.keyInYN(`Are you sure you want to delete ${process.argv[3]} file?`)) {
            fs.unlink(`${process.argv[3]}`, (err) => {
                if (err) throw err;
                console.log(`You deleted the file ${process.argv[3]}!`)
            })
        } else {
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
    case '--copyFile':
        fs.copyFile(`${process.argv[3]}`, `${process.argv[4]}`, (err) => {
            if (err) throw err;
            console.log(`Copied file ${process.argv[3]}, to ${process.argv[4]} file.`)
        })
        break;
    case '--moveFile':
        //must use the path name.
        fs.rename(`${process.argv[3]}`, `${process.argv[4]}`, (err) => {
            if (err) throw err;
            console.log(`Moved file ${process.argv[3]}, to ${process.argv[4]} folder.`)
        })
        break;
    case '--size':
        fs.stat(`${process.argv[3]}`, (err, stats) => {
            if (err) throw err;
            // console.log(stats);
            console.log(`The file ${process.argv[3]} has ${stats.size} bytes`)
        })
        break;
    case '--view':
        if (`${process.argv[4]}` === undefined && `${process.argv[5]}` === undefined) {
            fs.readFile(`${process.argv[3]}`, (err, data) => {
                if (err) throw err;
                // console.log(stats);
                console.log(`${data}`);
            })
        } else if (`${process.argv[4]}` === '--pause' && `${process.argv[5]}` !== Number) {
            let lenght = `${[process.argv[5]]}`
            const rl = readline.createInterface({
                input: require('fs').createReadStream(`${process.argv[3]}`),
            });
            for (i = 0; i <= lenght; i++){
                rl.on('line', (line)=>{
                    console.log(line);
                    rl.pause()
                })
            }
            // rl.on('line', (line) => {
            //     for (i = 0; i <= `${process.argv[5]}`; i++) {
            //         console.log(line);
            //         rl.pause()
            //     }
            // });
        } else {
            console.log(`ERROR! ${process.argv[4]} is not a command! Or ${process.argv[5]} is not a number.`)
        }
        break;
}

process.on('exit', (code) => {
    // console.log(`${code}`);
    console.log('Good bye!');
});