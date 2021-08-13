//creating a npm module with the fs core module
const fs = require('fs');

const createFile = (fileName) => {
    fs.open(fileName, 'w', (err) => {
        if (err) throw err;
        console.log(`File ${fileName} created!`)
    })
}

module.exports = {
    function1: createFile,
}