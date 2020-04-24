const http = require('http')
const port = 3000

function requestHandler(request, response) {
    console.log(request,url)
    if (request.url === "/hi"){
        response.end("Hello!")
    }
    else if (request.url === "/hello"){
        response.end("Hello, Sofi!")
    }
    else{
        response.end("Unknow url")
    }
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})