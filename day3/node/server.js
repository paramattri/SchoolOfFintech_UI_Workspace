const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    if(req.url == '/courses'){

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if(err) throw err
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.end(data)
        })

    }
    else{
        res.write("Not Valid Request")
        res.end()
    }
}).listen(3000, () => console.log("Server is running"))