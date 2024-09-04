const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {

    // console.log(req.headers, req.url);

    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page </title></head>');
        res.write('<body><form method="POST" action="/basepage"><input type="text" name="message"><button>Submit</button></form></body>');
        res.write('</html>');
        return res.end();

    } 
    if (url === '/basepage' && method === 'POST'){

        const body = [];

        req.on('data', (chunk) => { // This collects the chunks of the request body for response
            body.push(chunk);
        });

        req.on('end', () =>{ // Here, we need to buffer all the chunks to get the request body.
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFileSync('message.text', parsedBody.split("=")[1]);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    
    // process.exit(); // to stop the server's event loop.

});

server.listen(3000);