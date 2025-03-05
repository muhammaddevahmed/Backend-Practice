const http = require("http");

// Create Server
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end("Hello World");
}).listen(5000, () => {
    console.log('Server is running on port 5000...');
});
