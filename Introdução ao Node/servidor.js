const http = require('http');
const stats = require('./pc-ram')

const host = 'http://localhost';
const port = 3001;

http.createServer((req, res) => {
  var url = req.url;
  if(url === '/stats') {
    res.end(JSON.stringify(stats, null, 2))
  } else {
    res.end(`Bem Vindo !`);
  }
}).listen(port, () => {
  console.log(`
    Server is running ${host}:${port}
  `)
})
