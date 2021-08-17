import app from '../app.js';
import http from 'http';


let port = '3000';
app.set('port', port);
console.log("Server running on port " + port);

let server = http.createServer(app);
server.listen(port);


