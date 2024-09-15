const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Hi, this is your home page');
    return;
}
if(req.url === '/about'){
    res.end('Hi, this is your about page');
    return;
}
res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">back home</a>
`);
})

server.listen(5000);