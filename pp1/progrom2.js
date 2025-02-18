const http = require('http');

const server = http.createServer((req, res) => {
  
    if (req.url === '/home') {
       res.write('welcome to home page');
    } else if (req.url === '/about') {
        res.write('welcome to about page');
    } else if (req.url === '/contact') {
        res.write('welcome to contact page');
    } else {
        res.write(404, { 'Content-Type': 'text/plain' });
        
    }
    res.end();
});
server.listen(3000, () => {
    console.log(`Server is running on 3000`);
});
