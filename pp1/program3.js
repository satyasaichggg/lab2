const http = require('http');
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/' || req.url === '/home') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to the Home Page');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
        
    
});

server.listen(3000, () => {
    console.log(`Server is running on 3000`);
});
