const http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
    res.end('Hello You and Me');
})

server.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
});