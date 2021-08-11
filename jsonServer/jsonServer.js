//importing core modules
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            let json_send = [
                {
                    id: 1,
                    name: 'Daniel',
                    email: 'daniel@email.com',
                },
                {
                    id: 2,
                    name: 'Bruno',
                    email: 'bruno@email.com',
                },
                {
                    id: 3,
                    name: 'Gabriel',
                    email: 'gabriel@email.com',
                }
            ]
            res.end(JSON.stringify(json_send));
            break;
        case '/id=':
            const address = 'http://localhost:3000/id='
            const parse = url.parse(address, true);
            const urlData = parse.query;
            res.end(urlData.id);
            // switch (id) {
            //     case +'1':
            //         res.writeHead(200, { 'Content-Type': 'application/json' });
            //         let id1 = {
            //             id: 1,
            //             name: 'Daniel',
            //             email: 'daniel@email.com',
            //         }
            //         res.end(JSON.stringify(id1))
            //         break;
            // }

            break;
    }
}).listen(3000);

            // const myObj = JSON.parse(json_res)
            // const body = [json_res];
            // req.on('end', ()=>{
            //     const parsedBody = Buffer.concat(body).toString();
            //     const result = parsedBody.split('result')[1];
            //     fs.writeFile('index.html', result, (err)=>{
            //         if (err) throw err;
            //     })
            //     fs.readFile('index.html', (err, data) => {
            //         if (err) throw err;
            //         console.log('Index file loaded');
            //         // if response is 200 show this page which has have a html or text content type
            //         res.writeHead(200, { 'Content-Type': 'text/html' })
            //         res.write(data);
            //          res.end();
            //     })
            // })