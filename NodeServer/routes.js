const fs = require('fs');
const methods = require('./methods');

const requestHandler = (req, res) => {

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
    
        return req.on('end', () =>{ // Here, we need to buffer all the chunks to get the request body.
            const parsedBody = Buffer.concat(body).toString();
            var message = parsedBody.split("=")[1]
            fs.writeFileSync('message.text', message);
            methods.method1(message);
            methods.method2(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        
    }

};

// Ways to export this function to app.js/root code
// 1. 
module.exports = requestHandler;