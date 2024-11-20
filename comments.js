// Create web server with Node.js
// 1. Create a web server
// 2. Read file
// 3. Respond to the request
// 4. Listen to the port

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer((req, res) => {
    const _url = req.url;
    const queryData = url.parse(_url, true).query;
    const title = queryData.id;
    if (_url === '/') {
        _url = '/index.html';
    }
    if (_url === '/favicon.ico') {
        return res.writeHead(404);
    }
    res.writeHead(200);
    fs.readFile(`data/${title}`, 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(3000)