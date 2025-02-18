const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/index.html') {

        fs.readFile('index.html', (err, data) => {
            if (err) {
             
                res.end('500 Internal Server Error');
            } else {

                res.end(data);
            }
        });
    } else {
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log(`Server is running at 3000`);
});
