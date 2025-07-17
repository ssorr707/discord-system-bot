 const http = require('http');
function keepAlive() {
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bot is alive!');
    }).listen(3000);
}
module.exports = { keepAlive };

