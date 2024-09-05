
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url ==='/'){
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Index</title></head>');
        res.write('<body><h3>User App</h3>');

        res.write('<form method="POST" action="/users"> \
                    <input type="submit" value="User list">\
                    </form>  \
                    <br>');

        res.write('<form method="POST" action="/create-user">\
                    <input type="text" placeholder="enter username" name="message"> \
                    <input type="submit" value="Create User"> \
                    </form>');

        res.write('</body>');
        res.write('</html>');
        return res.end()
    }
    if (url ==='/users'){
        const ar = [1,2,3,4,5,6,7,8];
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<ul>');
        for (i of ar){
            res.write('<li>User'+i.toString()+'</li>');
        }
        res.write('</ul>');

        res.write('<a href="/">Back Home</a>')
        res.write('</html>');
        return res.end();
    }
    if (url ==='/create-user' && method ==='POST'){

        const body = [];

        req.on('data', (chunks) =>{
            body.push(chunks)
        });

        return req.on('end', () =>{

            const parsedBody = Buffer.concat(body).toString();
            var message = parsedBody.split("=")[1];
            console.log("user name: " + message);
            res.setHeader('Location', '/');
            return res.end();

        });
    }
};

module.exports = {requestHandler};