//importing core modules
const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            //SYNTHAX: fileName, content, callback with error
            fs.writeFile('index.html', '<h1>Welcome to the http server!</h1>', (err) => {
                if (err) throw err;
                console.log('index file saved!')
            })
            fs.readFile('index.html', (err, data) => {
                if (err) throw err;
                console.log('Index file loaded');
                // if response is 200 show this page which has have a html or text content type
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data);
                return res.end();
            })
            break;
        case '/admin':
            res.write('<head><title>Http Server - Admin Page</title></head>');
            res.write('<h1>This is the admin page</h1>');
            res.end();
            break;
        default:
            fs.writeFile('404page.html', '<center><h1>404 PAGE NOT FOUND</h1><center/>', (err) => {
                if (err) throw err;
            })
            fs.readFile('404page.html', (err, data) => {
                if (err) throw err;
                console.log('Index file loaded');
                // if response is 200 show this page which has have a html or text content type
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data);
                return res.end();
            })
            break;
    }
}).listen(port, () => {
    console.log('This is a http server!');
    console.log(`Server is now listeniing from port ${port}`);
})