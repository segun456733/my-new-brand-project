const http = require('http')
const server = http.createServer((req, res) =>{
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200,{'content-type': 'text/plain'})
    res.end('Hello, from the shegy smart')
      }  else {
            res.writeHead(404, {'content-type': 'text/plain'})
            res.end('Page not found')
        }
})
const PORT= 3000
server.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`)
})